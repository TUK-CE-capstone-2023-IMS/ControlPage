import React, { useState, useEffect } from 'react';
import Sidebar from "../MainPage/Sidebar";
import RoomCard from './RoomCard';
import './RoomForm.css'
import axios from "axios";

const RoomForm = () => {
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/patient/read');

                if (response && response.data) {
                    setPatients(response.data);
                } else {
                    console.error('서버 응답에 데이터가 없음');
                }
            } catch (error) {
                console.error('데이터를 불러오는 중 오류 발생:', error.response ? error.response.data : error.message);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="RoomForm-Layout">
            <Sidebar/>
            <div className="room-manager">
                <div className="title">
                    <div className="title-inner">방 관리</div>
                </div>
                <div className="room-form">
                    <div className="room-list">
                        {patients.map(patient => (
                            <RoomCard key={patient.id} roomInfo={patient} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomForm;
