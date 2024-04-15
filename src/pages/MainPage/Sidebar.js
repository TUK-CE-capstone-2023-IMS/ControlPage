import React from 'react';
import './Sidebar.css';
import { MdHomeFilled } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";

const Sidebar = () => {
    return (
        <div className="sidebar-container">
            <div className="sidebar">
                <ul>
                    <div>
                        <div className="homeIcon">
                            <MdHomeFilled size={64}/>
                        </div>
                        <div className="sidebar_text">
                            <a href="/">메인 홈</a>
                        </div>
                        <div className="sidebar_text">
                            <a href="./dashboard">대시 보드</a>
                        </div>
                        <div className="sidebar_text">
                            <a href="./patients">환자 목록</a>
                        </div>
                        <div className="sidebar_text">
                            <a href="#">환경 설정</a>
                        </div>
                    </div>
                </ul>
            </div>
            <div className="sidebar-divider">
                <div className="topbar">
                    <div className="peopleIcon">
                        <MdAccountCircle size={50}/>
                    </div>
                    <div className="topbar_text">
                        <a href="./mypage">송채연 님</a>
                    </div>
                    <div className="topbar_text">
                        <a href="#">로그아웃</a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Sidebar;
