import React from 'react';
import './RoomCard.css';

const RoomCard = ({ roomInfo }) => {
    const cardClass = `room-card ${roomInfo.status === '외출중' ? 'available' : 'occupied'}`;

    return (
        <div  className={cardClass}>
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
