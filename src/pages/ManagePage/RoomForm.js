import React from 'react';
import Sidebar from "../MainPage/Sidebar";
import RoomCard from './RoomCard';
import './RoomForm.css'
const RoomForm = () => {
    const rooms = [
        { id: 1, roomNumber: 'A101', status: '외출중', patientName: '', age: '', bloodType: '' },
        { id: 2, roomNumber: 'A102', status: '재실중', patientName: '김철수', age: 30, bloodType: 'A+' },
        { id: 3, roomNumber: 'A103', status: '재실중', patientName: '박영희', age: 25, bloodType: 'B+' },
        { id: 4, roomNumber: 'A104', status: '재실중', patientName: '이소라', age: 40, bloodType: 'O-' },
        { id: 5, roomNumber: 'B201', status: '재실중', patientName: '장민호', age: 60, bloodType: 'AB+' },
        { id: 6, roomNumber: 'B202', status: '재실중', patientName: '손지민', age: 35, bloodType: 'A-' },
        { id: 7, roomNumber: 'B203', status: '재실중', patientName: '김유진', age: 28, bloodType: 'B-' },
        { id: 8, roomNumber: 'B204', status: '재실중', patientName: '남궁민주', age: 45, bloodType: 'O+' },
    ];



    return (
        <div className="RoomForm-Layout">
            <Sidebar/>
            <div className="room-manager">
                <div className="title">
                    <div className="title-inner">방 관리</div>
                </div>
                <div className="room-form">
                    <div className="room-list">
                        {rooms.slice(0, rooms.length).map(room => (
                            <RoomCard key={room.id} roomInfo={room} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default RoomForm;
