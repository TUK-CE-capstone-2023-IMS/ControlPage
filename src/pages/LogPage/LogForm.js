import Sidebar from "../MainPage/Sidebar";
import React from "react";
import LogCard from "./LogCard";
import './LogForm.css';

const LogForm = () => {
    const logs = [
        { id: 1, log: '입실', time: '11:30:19', status: 'normal' },
        { id: 2, log: '앉음', time: '11:45:00', status: 'normal' },
        { id: 3, log: '낙상 발생', time: '12:15:22', status: 'emergency' },
        { id: 4, log: '누움', time: '13:30:45', status: 'normal' },
        { id: 5, log: '서 있음', time: '14:00:12', status: 'normal' },
        { id: 6, log: '퇴실', time: '15:10:30', status: 'normal' },
        { id: 7, log: '입실', time: '16:00:00', status: 'normal' },
    ];

    return (
        <div className="log-form-layout">
            <Sidebar />

            <div className="log-form">
                <div className="room-info">
                    <p className="log-room-num">B 102</p>
                    <p className="patient-name">조은상 님</p>
                </div>
                <div className="log-list">
                    {logs.map(log => (
                        <LogCard key={log.id} logInfo={log} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default LogForm;
