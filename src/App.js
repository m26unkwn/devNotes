import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Landing, Login, Signup } from "./screens";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
