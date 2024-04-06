import React, { useState, useEffect } from 'react';
import './App.css';
import MainPage from './pages/MainPage/main';
import LoginPage from './pages/AuthPage/Login';
import RoomForm from "./pages/ManagePage/RoomForm";
import LogForm from "./pages/LogPage/LogForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmergencyAlert from './pages/NoticePage/EmergencyAlert'; // 가정: EmergencyAlert 컴포넌트가 이 경로에 있음

function App() {
    const [alertMessage, setAlertMessage] = useState('');
    const [isVisible, setIsVisible] = useState(false); // 알림의 표시 여부를 상위 컴포넌트에서 관리

    useEffect(() => {
        // SSE 연결 설정
        const eventSource = new EventSource('http://localhost:8080/alert',{
        });

        eventSource.onopen = () => {
            console.log("SSE-Connect")
        }
        eventSource.addEventListener("emergency",function (e){
            console.log(e.data)
            setAlertMessage(e.data);
            setIsVisible(true);
        })
        // 메시지 이벤트 리스너 설정
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
                    <Route path="/rooms" element={<RoomForm />} />
                    <Route path="/dashboard" element={<LogForm />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
