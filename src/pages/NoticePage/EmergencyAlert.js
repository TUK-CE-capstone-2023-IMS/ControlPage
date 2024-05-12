import React, { useEffect } from 'react';
import './EmergencyAlert.css';
import useSound from 'use-sound';
import sound from './tfile.mp3';

const EmergencyAlert = ({ message, onClose }) => {
    const alert = { id: 1, roomNum: '한국공학대학교 산학융합관 716호', title: '낙상 발생!', name: '조은상 님' };
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
                        <div className="emergency_img">
                            <img src={require('./free-icon-emergency-4349849.png')} alt="My Image" />
                        </div>
                        <p className="emergency-title">{alert.title}</p>
                        <p className="emergency-roomNum">{alert.roomNum}</p>
                        <p className="emergency-name">{alert.name}</p>
                    </div>
                    <button className="close-btn" onClick={handleClose}>확인</button>
                </div>
            </div>
        </div>
    );
};

export default EmergencyAlert;
