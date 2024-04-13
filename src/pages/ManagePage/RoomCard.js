import React, { useState, useRef } from 'react';
import './RoomCard.css';

const RoomCard = ({ roomInfo }) => {
    const cardClass = `room-card ${roomInfo.status === '외출중' ? 'available' : 'occupied'}`;
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleToggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    const handleMouseLeave = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className={cardClass}>
            <button className="room-card-menu-btn" onClick={handleToggleMenu}>
                {isMenuOpen && (
                    <div className="room-card-menu"onMouseLeave={handleMouseLeave}>
                        <button className="room-card-menu-select-btn">환경설정</button>
                        <button className="room-card-menu-select-btn">세부정보</button>
                    </div>
                )}
            </button>
            <h4 className="room-num">{roomInfo.roomNumber}</h4>
            <p className="status">{roomInfo.status}</p>
            {roomInfo.status === '재실중' && (
                <div className="patient-info">
                    <p>{roomInfo.patientName}</p>
                    <p>({roomInfo.age})님</p>
                </div>
            )}
        </div>
    );
};

export default RoomCard;
