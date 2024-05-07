import React from 'react';
import './Sidebar.css';
import { MdAccountCircle } from "react-icons/md";
import { GoHome } from "react-icons/go";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoSettingsOutline, IoPersonOutline } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Sidebar = () => {
    const navigate = useNavigate();
    const managername = localStorage.getItem('managername');

    const handleLogout = async () => {
        try {
            const managerid = localStorage.getItem('managerid');
            const response = await axios.get(`http://localhost:8080/manager/logout?managerid=${managerid}`);
            console.log('로그아웃 요청 성공:', response.data);

            // 로그아웃 성공 시 로컬 스토리지의 데이터를 지우고 로그인 페이지로 이동
            localStorage.clear();
            navigate('/login');
        } catch (error) {
            console.error('로그아웃 요청 실패:', error.response ? error.response.data : error.message);
        }
    };

    const addPatient = () => {
        navigate("/AddPatient");
    };

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
                                <Link to="/">메인 홈</Link>
                            </div>
                        </div>
                        <div className="dashboard_sidebar">
                            <div className="dashboardIcon">
                                <LuLayoutDashboard size={45}/>
                            </div>
                            <div className="sidebar_dashboard_text">
                                <Link to="/rooms">대시 보드</Link>
                            </div>
                        </div>
                        <div className="patientlist_sidebar">
                            <div className="patientlistIcon">
                                <IoPersonOutline size={45}/>
                            </div>
                            <div className="sidebar_patientlist_text">
                                <Link to="/patients">환자 목록</Link>
                            </div>
                        </div>
                        <div className="setting_sidebar">
                            <div className="settingIcon">
                                <IoSettingsOutline size={45}/>
                            </div>
                            <div className="sidebar_setting_text">
                                <Link to="#">환경 설정</Link>
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
                        <Link to="/mypage">{managername} 님</Link>
                    </div>
                    <div className="topbar_text">
                        <Link to="#" onClick={handleLogout}>로그아웃</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
