/** @format */

import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import {
  Landing,
  Archive,
  Login,
  Sidebar,
  Signup,
  Home,
  Lable,
  Trash,
} from "./screens";

function App() {
  const location = useLocation();

  const locationFlag =
    location.pathname === "/" ||
    location.pathname === "/login" ||
    location.pathname === "/signup";
  return (
    <div className={locationFlag ? "" : "main-wrapper"}>
      {!locationFlag && <Sidebar />}
      <Routes>
        <Route path='/' element={<Landing />} />

        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route
          path='/home'
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path='/labels'
          element={
            <PrivateRoute>
              <Lable />
            </PrivateRoute>
          }
        />
        <Route
          path='/archive'
          element={
            <PrivateRoute>
              <Archive />
            </PrivateRoute>
          }
        />
        <Route
          path='/trash'
          element={
            <PrivateRoute>
              <Trash />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
