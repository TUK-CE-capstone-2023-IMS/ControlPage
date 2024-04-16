import React, { useEffect } from 'react';
import './EmergencyAlert.css';
import useSound from 'use-sound';
import sound from './tfile.mp3';

const EmergencyAlert = ({ message, onClose }) => {
    const alert = { id: 1, roomNum: 'B 204', title: '낙상발생' };
    const [play, { stop }] = useSound(sound);
    useEffect(() => {
        play();
    }, [play]);
    const handleClose = () => {
        stop();
        onClose();
    };

    return (
        <div className="emergency-overlay">
            <div className="emergency-layout">
                <div className="emergency-alert">
                    <div className="emergency-info">
                        <p className="emergency-roomNum">{alert.roomNum}</p>
                        <p className="emergency-title">{alert.title}</p>
                    </div>
                    <button className="close-btn" onClick={handleClose}>닫기</button>
                </div>
            </div>
        </div>
    );
};

export default EmergencyAlert;
