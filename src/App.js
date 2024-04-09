import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/AuthPage/Login';
import Sidebar from './pages/MainPage/Sidebar';
import ForgotPasswordPage from './pages/AuthPage/ForgotPassword';
import SignUpPage from './pages/AuthPage/SignUp';
import MainPage from './pages/MainPage/main';
import Calendar from './pages/MainPage/Calendar';
import MyPage from './pages/AuthPage/MyPage';
import PatientForm from './pages/ManagePage/PatientForm'
import React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom"
function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Routes>
              <Route path = "/" element={<MainPage/> }/>
              <Route path = "/login" element={<LoginPage/>}/>
          </Routes>
        </div>
      </BrowserRouter>
  );
}
export default App;



