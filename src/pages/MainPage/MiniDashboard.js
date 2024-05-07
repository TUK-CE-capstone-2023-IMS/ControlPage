import React from 'react';
import './MiniDashboard.css';

const MiniDashBoard = () => {
    return (
        <div className="minidashboardpage-layout">
            <div className="minidashboard_page">
                <div className="minidashboard_box">
                    <div className= "minidashboard_text">
                        <p className="minidashboard_text1">대시보드</p>
                        <div className="minidashboard_text2">
                            <a href="#">B102</a>
                        </div>
                        <div className="minidashboard_text3">
                            <a href="#">B103</a>
                        </div>
                        <div className="minidashboard_text4">
                            <a href="#">B104</a>
                        </div>
                        <div className="minidashboard_text5">
                            <a href="#">B105</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MiniDashBoard;
