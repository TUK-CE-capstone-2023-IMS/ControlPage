import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // useNavigate로 변경
import './RoomCard.css';

const RoomCard = ({ roomInfo }) => {
    const navigate = useNavigate(); // useNavigate 사용
    const cardClass = `room-card ${roomInfo.status === '외출중' ? 'available' : 'occupied'}`;
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [patientDetails, setPatientDetails] = useState(null);

    const handleToggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };
    const handledInfoClick = async () => {
        navigate('/patientInfo', {state: {patientid: roomInfo.patientid}});
    };


    const handleDetailClick = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/log/log/all?patientId=${roomInfo.patientid}`);

            if (response && response.data) {
                setPatientDetails(response.data);
                navigate('/dashboard', { state: { logs: response.data ,name:roomInfo.name,address:roomInfo.address} });
            } else {
                console.error('서버 응답에 데이터가 없음');
            }
        } catch (error) {
            console.error('세부 정보를 불러오는 중 오류 발생:', error.response ? error.response.data : error.message);
        }
    };

    return (


        <div className={cardClass}>
            <button className="room-card-menu-btn" onClick={handleToggleMenu}>
                {isMenuOpen && (
                    <div className="room-card-menu">

                        <button className="room-card-menu-select-btn">환경설정</button>
                        <button className="room-card-menu-select-btn" onClick={handledInfoClick}>환자 정보 확인</button>
                        <button className="room-card-menu-select-btn" onClick={handleDetailClick}>로그 데이터 확인</button>
                    </div>
                )}
            </button>
            <h4 className="roomcard_name">{roomInfo.name}님</h4>
            <p className="roomcard_age">{roomInfo.age}세</p>
        </div>
    );
};

export default RoomCard;
