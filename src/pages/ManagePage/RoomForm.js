import React, { useState, useEffect } from 'react';
import Sidebar from "../MainPage/Sidebar";
import RoomCard from './RoomCard';
import './RoomForm.css'
import axios from "axios";

const RoomForm = () => {

    const rooms = [
        { id: 1, roomNumber: 'A101', status: '외출중', patientName: '', age: '', bloodType: '' },
        { id: 2, roomNumber: 'A102', status: '재실중', patientName: '조은상', age: 30, bloodType: 'A+' },
        { id: 3, roomNumber: 'A103', status: '재실중', patientName: '박영희', age: 25, bloodType: 'B+' },
        { id: 4, roomNumber: 'A104', status: '재실중', patientName: '이소라', age: 40, bloodType: 'O-' },
        { id: 5, roomNumber: 'B201', status: '재실중', patientName: '장민호', age: 60, bloodType: 'AB+' },
        { id: 6, roomNumber: 'B202', status: '재실중', patientName: '손지민', age: 35, bloodType: 'A-' },
        { id: 7, roomNumber: 'B203', status: '재실중', patientName: '김유진', age: 28, bloodType: 'B-' },
        { id: 8, roomNumber: 'B204', status: '재실중', patientName: '남궁민주', age: 45, bloodType: 'O+' },
    ];

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
