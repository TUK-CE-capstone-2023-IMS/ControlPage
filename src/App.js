import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/AuthPage/Login';
import Sidebar from './pages/MainPage/Sidebar';
import ForgotPasswordPage from './pages/AuthPage/ForgotPassword';
import SignUpPage from './pages/AuthPage/SignUp';
import MainPage from './pages/MainPage/main';
import React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom"
import RoomForm from "./pages/ManagePage/RoomForm";
import LogForm from "./pages/LogPage/LogForm";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Routes>
              <Route path = "/" element={<MainPage/> }/>
              <Route path = "/login" element={<LoginPage/>}/>
              <Route path = "/rooms" element={<RoomForm/>}/>
              <Route path= "/dashboard" element={<LogForm/>}/>
          </Routes>
        </div>
      </BrowserRouter>
  );
}
export default App;



