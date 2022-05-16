import axios from "axios";
import { createContext, useReducer, useContext } from "react";
import authReducer from "../reducer/auth-reducer";
import { useNote } from "./note-provider";
import { toast } from "react-toastify";

const AuthContext = createContext();

const initialAuthState = {
  token: "",
  userDetails: "",
  authError: {
    login: "",
    signup: "",
  },
};

const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, initialAuthState);
  const { allNoteDispatch } = useNote();
  console.log({ allNoteDispatch });

  const getUserLogin = async (email, password) => {
    try {
      const {
        data: { encodedToken, foundUser },
      } = await axios({
        method: "post",
        url: "/api/auth/login",
        data: { email, password },
      });
      localStorage.setItem(
        "userData",
        JSON.stringify({
          token: encodedToken,
          foundUser: foundUser,
        }),
      );

      authDispatch({
        type: "ADD_TOKEN",
        payload: encodedToken,
      });
      authDispatch({
        type: "ADD_USER_DATA",
        payload: {
          firstName: foundUser.firstName,
          email: foundUser.email,
          lastName: foundUser.lastName,
        },
      });
      allNoteDispatch({
        type: "ADD_ALL_DATA",
        payload: {
          trash: foundUser.trash,
          notes: foundUser.notes,
          archive: foundUser.archive,
        },
      });
    } catch ({
      response: {
        data: { errors },
        status,
      },
    }) {
      if (status === 404) {
        authDispatch({
          type: "ADD_LOGIN_ERROR",
          error: "Email is not present",
        });
      } else if (status === 401) {
        authDispatch({
          type: "ADD_LOGIN_ERROR",
          error: "Email or  Password is not present",
        });
      }
      console.log(errors[0], status);
      toast.error(errors[0]);
    }
  };

  const getUserSignUp = async (email, password, firstName, lastName) => {
    try {
      let {
        data: { encodedToken, createdUser },
      } = await axios({
        method: "post",
        url: "/api/auth/signup",
        data: {
          email: email,
          password: password,
          firstName: firstName,
          lastName: lastName,
        },
      });
      localStorage.setItem(
        "userData",
        JSON.stringify({
          token: encodedToken,
          foundUser: createdUser,
        }),
      );

      authDispatch({
        type: "ADD_TOKEN",
        payload: encodedToken,
      });
      authDispatch({
        type: "ADD_USER_DATA",
        payload: {
          firstName: createdUser.firstName,
          email: createdUser.email,
          lastName: createdUser.lastName,
        },
      });
      allNoteDispatch({
        type: "ADD_ALL_DATA",
        payload: {
          trash: createdUser.trash,
          notes: createdUser.notes,
          archive: createdUser.archive,
        },
      });
    } catch ({
      response: {
        data: { errors },
        status,
      },
    }) {
      if (status === 422) {
        authDispatch({
          type: "ADD_SIGNUP_ERROR",
          error: "Email is already exist.",
        });
      }
      toast.error(errors[0]);
      console.log(errors[0]);
    }
  };

  const logoutUser = (e, navigate) => {
    e.preventDefault();
    authDispatch({ type: "LOGOUT_USER" });
    allNoteDispatch({ type: "CLEAR_ALL_DATA_FROM_STATE" });
    localStorage.removeItem("userData");
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        getUserLogin,
        logoutUser,
        getUserSignUp,
        authState,
        authDispatch,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);
export { useAuth, AuthProvider };
