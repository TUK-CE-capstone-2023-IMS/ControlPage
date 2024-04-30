import Sidebar from "../MainPage/Sidebar";
import React, { useEffect } from "react";
import LogCard from "./LogCard";
import './LogForm.css';
import {useLocation} from "react-router";


const LogForm = () => {
    const {state} = useLocation()
    console.log(state);
    const logs = Array.isArray(state?.logs) ? state.logs : [];
    return (
        <div className="log-form-layout">
            <Sidebar />
            <div className="log-form">
                <div className="room-info">
                    <p className="log-room-num">B 102</p>
                    <p className="patient-name">{state.name}님</p>
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
