import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/AuthPage/Login';
import Sidebar from './pages/MainPage/Sidebar';
import ForgotPasswordPage from './pages/AuthPage/ForgotPassword';
import SignUpPage from './pages/AuthPage/SignUp';
import MainPage from './pages/MainPage/main';
<<<<<<< HEAD
import Calendar from './pages/MainPage/Calendar';
import MyPage from './pages/AuthPage/MyPage';
import PatientForm from './pages/ManagePage/PatientForm'

function App() {
  return (
      <PatientForm></PatientForm>
=======
import React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom"
import RoomForm from "./pages/ManagePage/RoomForm";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Routes>
              <Route path = "/" element={<MainPage/> }/>
              <Route path = "/login" element={<LoginPage/>}/>
              <Route path = "/rooms" element={<RoomForm/>}/>
          </Routes>
        </div>
      </BrowserRouter>
>>>>>>> 50c0c16eb069228ef828b9ed82c174393b831509
  );
}
export default App;



