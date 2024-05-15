import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import Sidebar from "../MainPage/Sidebar";
import LogCard from "./LogCard";
import './LogForm.css';

const LogForm = () => {
    const { state } = useLocation();
    const [logs, setLogs] = useState(Array.isArray(state?.logs) ? state.logs : []);

    const reloadLog = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/log/log/all?patientId=${state.patientid}`);
            if (response && response.data) {
                const newLogs = Array.isArray(response.data) ? response.data : [];
                setLogs(newLogs); // 상태 업데이트
            } else {
                console.error('서버 응답에 데이터가 없음');
            }
        } catch (error) {
            console.error('세부 정보를 불러오는 중 오류 발생:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <div className="log-form-layout">
            <Sidebar />
            <div className="log-form">
                <div className="room-info">
                    <div className="room-info-top">
                        <div className="log-room-num">{state.address}</div>
                        <button className="log-reload-btn" onClick={reloadLog}></button>
                    </div>
                    <div className="log-patient-name">{state.name}님</div>
                </div>

                <div className="log-list">
                    <div className="log-card-layout-title">
                        <div className="log-card-date">날짜</div>
                        <div className="log-card-type">타입</div>
                        <div className="log-card-status">상태</div>
                    </div>
                    {logs.map(log => (
                        <LogCard key={log.id} logInfo={log} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default LogForm;
