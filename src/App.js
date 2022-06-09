import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SetAvatar from "./pages/SetAvatar";
import ProtectedRoute from "./components/CustomRoute/ProtectRoute";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/setAvatar" element={<ProtectedRoute />}>
            <Route index element={<SetAvatar />} />
          </Route>
          <Route path="/" element={<ProtectedRoute isCheckedAvatar={true} />}>
            <Route index element={<Chat />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <ToastContainer />
    </>
  );
}
