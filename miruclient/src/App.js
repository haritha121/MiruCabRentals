import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import RegisterUser from "./pages/RegisterUser";
import CarBooking from "./pages/CarBooking";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/registeruser" exact element={<RegisterUser />} />
        <Route path="/carbooking" exact element={<CarBooking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
