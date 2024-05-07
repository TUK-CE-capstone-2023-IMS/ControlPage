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
        navigate('/patients', {state: {patientid: roomInfo.patientid}});
    };

    const handleSettingClick = async () => {
    };

    const handleDetailClick = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/log/log/all?patientId=${roomInfo.patientid}`);

            if (response && response.data) {
                setPatientDetails(response.data);
                navigate('/dashboard', { state: { logs: response.data ,name:roomInfo.name,} });
            } else {
                console.error('서버 응답에 데이터가 없음');
            }
        } catch (error) {
            console.error('세부 정보를 불러오는 중 오류 발생:', error.response ? error.response.data : error.message);
        }
    };

    return (

        // <div  className={cardClass}>
        // <h4 className="room-num">{roomInfo.roomNumber}</h4>
        // <p className="status">{roomInfo.status}</p>
        // {roomInfo.status === '재실중' && (
        //     <div className="patient-info">
        //         <p>{roomInfo.patientName}</p>
        //         <p>({roomInfo.age})님</p>
        //     </div>
        // )}

        <div className={cardClass}>
            <div className="roomcard_box">
                <button className="room-card-menu-btn" onClick={handleToggleMenu}>
                    {isMenuOpen && (
                        <div className="room-card-menu">
                            <button className="room-card-menu-select-btn">환경설정</button>
                            <button className="room-card-menu-select-btn" onClick={handleDetailClick}>세부정보</button>
                            <button className="room-card-menu-select-btn" onClick={handledInfoClick}>환자 정보 확인</button>
                            <button className="room-card-menu-select-btn" onClick={handleSettingClick}>개인 감지 영역 설정</button>
                            <button className="room-card-menu-select-btn" onClick={handleDetailClick}>로그 데이터 확인</button>
                        </div>
                    )}
                </button>
                <div className="roomcard_info">
                    <div className="roomcard_address">
                        <h4>{roomInfo.address}</h4>
                    </div>
                    <div className="roomcard_name">
                        <p>{roomInfo.name}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomCard;
