// import { useNavigate } from "react-router-dom";
import { useAuth, useNote } from "../../context";
import axios from "axios";

export const useHandler = () => {
  const {
    authState: { token },
  } = useAuth();

  const {
    allNoteDispatch,
    noteState,
    updateNote,
    noteDispatch,
    updateDispatch,
  } = useNote();

  //const { setToast, setLoading } = useToast();
  // const navigate = useNavigate();

  // this function handle all the api calls

  const serverCalls = async (method, url, type, property, body = null) => {
    const headers = { authorization: token };
    try {
      // setLoading(true);
      const { data } = await axios({
        method: method,
        url: url,
        data: body,
        headers: headers,
      });
      console.log("server calls", data[property]);
      allNoteDispatch({ type, payload: data[property] });
      //   setToast({
      //     toastVarient: "success",
      //     message: message,
      //     toast: true,
      //   });
      // setLoading(false);
    } catch (error) {
      //   setToast({
      //     toast: true,
      //     toastVarient: "failure",
      //     message: "Something went wrong!!",
      //   });
      console.log("errror", error);
      //setLoading(false);
    }
  };

  // this is add to like handler.
  // it do the operation of adding any video into like section.

  const addNote = () => {
    serverCalls(
      "post",
      "/api/notes",
      "ADD_NOTE_INTO_NOTES",
      "notes",

      {
        note: noteState,
      },
    ).then(() => noteDispatch({ type: "RESET_NOTE" }));
  };

  const editNote = () => {
    serverCalls(
      "post",
      `/api/notes/${updateNote._id}`,
      "ADD_NOTE_INTO_NOTES",
      "notes",

      {
        note: updateNote,
      },
    ).then(() => updateDispatch({ type: "RESET_NOTE" }));
  };

  const deleteNote = (id) => {
    console.log("hello");
    serverCalls("delete", `/api/notes/${id}`, "ADD_NOTE_INTO_NOTES", "notes");
  };

  const handlers = {
    addNote,
    editNote,
    deleteNote,
  };

  return [handlers];
};
