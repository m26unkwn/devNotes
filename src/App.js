/** @format */

import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { PrivateRoute } from "./components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  Landing,
  Archive,
  Login,
  Signup,
  Home,
  Labels,
  Trash,
  Profile,
  Navigation,
} from "./screens";

function App() {
  const location = useLocation();

  const locationFlag =
    location.pathname === "/" ||
    location.pathname === "/login" ||
    location.pathname === "/signup";
  return (
    <div className={locationFlag ? "" : "main-grid-container"}>
      {!locationFlag && <Navigation />}
      <ToastContainer theme='colored' autoClose={2000} position='top-right' />
      <Routes>
        <Route path='/' element={<Landing />} />

        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route element={<PrivateRoute />}>
          <Route path='/home' element={<Home />} />
          <Route path='/labels' element={<Labels />} />
          <Route path='/archive' element={<Archive />} />
          <Route path='/trash' element={<Trash />} />
          <Route path='/profile' element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
