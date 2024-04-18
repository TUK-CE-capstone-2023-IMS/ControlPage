import React, { useState, useEffect } from 'react';
import './App.css';
import MainPage from './pages/MainPage/main';
import LoginPage from './pages/AuthPage/Login';
import SignupPage from './pages/AuthPage/SignUp';
import RoomForm from "./pages/ManagePage/RoomForm";
import LogForm from "./pages/LogPage/LogForm";
import MyPage from "./pages/AuthPage/MyPage";
import PatientForm from "./pages/ManagePage/PatientInfoForm"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmergencyAlert from './pages/NoticeP age/EmergencyAlert';
import PatientInfoChangeForm from "./pages/ManagePage/PatientInfoChangeForm";

function PatientInfoForm() {
    return null;
}

function App() {
    const [alertMessage, setAlertMessage] = useState('');
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // SSE 연결 설정
        const eventSource = new EventSource('http://localhost:8080/alert');

        eventSource.onopen = () => {
            console.log("SSE-Connect")
        }
        /*eventSource.addEventListener("emergency",function (e){
            console.log(e.data)
            setAlertMessage(e.data);
            setIsVisible(true);
        })*/
        eventSource.onmessage = (event) =>{
            console.log(event.data)
            setAlertMessage(event.data)
            setIsVisible(true)
        }
        eventSource.onerror = (event) => {
            eventSource.close();
            if (event.target.readyState === EventSource.CLOSED) {
                console.log("연결종료");
            } else {
                console.log("에러발생");
            }
        };

        return () => {
            eventSource.close();
        };
    }, []);

    return (
        <BrowserRouter>
            <div className="App">
                {isVisible && <EmergencyAlert message={alertMessage} onClose={() => setIsVisible(false)} />}
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignupPage />} />
                    <Route path="/patients" element={<PatientForm />} />
                    <Route path="/log" element={<LogForm />} />
                    <Route path="/PatientInfo" element={<PatientInfoForm />} />
                    <Route path="/PatientInfoChangeForm" element={<PatientInfoChangeForm />} />
                    <Route path="/mypage" element={<MyPage />} />
                    <Route path="/rooms" element={<RoomForm />} />
                    {/* <Route path="/forgotpassword" element={<ForgotPasswordPage />} /> */}

                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
