import React, {useState} from 'react';
import './EmergencyAlert.css'
const EmergencyAlert = ({message,onClose}) => {
    const alert = {id: 1, roomNum: 'B 204', title: '낙상발생'}

    return (
        <div className="emergency-overlay">
            <div className="emergency-layout">
                <div className="emergency-alert">
                    <div className="emergency-info">
                        <p className="emergency-roomNum">{alert.roomNum}</p>
                        <p className="emergency-title">{alert.title}</p>
                    </div>
                    <button className="close-btn" onClick={onClose}>닫기</button> {/* 닫기 버튼 클릭 시 onClose 함수 호출 */}
                </div>
            </div>
        </div>
    );
}

export default EmergencyAlert;
