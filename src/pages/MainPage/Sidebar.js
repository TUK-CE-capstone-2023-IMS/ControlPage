import React from 'react';
import './Sidebar.css';
import { MdAccountCircle } from "react-icons/md";
import { GoHome } from "react-icons/go";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";

const Sidebar = () => {
    return (
        <div className="sidebar-container">
            <div className="sidebar">
                <ul>
                    <div>
                        <div className="mainhome_sidebar">
                            <div className="homeIcon">
                                <GoHome size={45}/>
                            </div>
                            <div className="sidebar_mainhome_text">
                                <a href="/">메인 홈</a>
                            </div>
                        </div>
                        <div className="dashboard_sidebar">
                            <div className="dashboardIcon">
                                <LuLayoutDashboard size={45}/>
                            </div>
                            <div className="sidebar_dashboard_text">
                                <a href="./rooms">대시 보드</a>
                            </div>
                        </div>
                        <div className="patientlist_sidebar">
                            <div className="patientlistIcon">
                                <IoPersonOutline size={45}/>
                            </div>
                            <div className="sidebar_patientlist_text">
                                <a href="./patients">환자 목록</a>
                            </div>
                        </div>
                        <div className="setting_sidebar">
                            <div className="settingIcon">
                                <IoSettingsOutline size={45}/>
                            </div>
                            <div className="sidebar_setting_text">
                                <a href="#">환경 설정</a>
                            </div>
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
                        <a href="login">로그아웃</a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Sidebar;
