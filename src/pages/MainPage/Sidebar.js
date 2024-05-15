import './Sidebar.css';
import { MdAccountCircle } from "react-icons/md";
import { GoHome } from "react-icons/go";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoSettingsOutline, IoPersonOutline } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Sidebar = () => {
    const navigate = useNavigate();
    const [managerInfo, setManagerInfo] = useState('');
    const [showLoginAlert, setShowLoginAlert] = useState(false); // 로그인 알림 상태 추가
    const managerId = localStorage.getItem('managerId');

    useEffect(() => {
        const fetchData = async () => {
            if (managerId) {
                try {
                    const response = await axios.get(`http://localhost:8080/manager/info?managerId=${managerId}`);
                    if (response && response.data) {
                        setManagerInfo(response.data);
                    } else {
                        console.error('서버 응답에 데이터가 없음');
                    }
                } catch (error) {
                    console.error('데이터를 불러오는 중 오류 발생:', error.response ? error.response.data : error.message);
                }
            }
        };
        fetchData();
    }, []);

    const handleMyPageClick = () => {
        if (managerInfo) {
            navigate('/mypage', { state: { managerId: managerInfo.id } });
        } else {
            setShowLoginAlert(true); // 로그인 알림 표시
        }
    };

    const handleLogout = () => {
        localStorage.clear();
        navigate('/login');
    };


    return (
        <div className="sidebar-container">
            <div className="sidebar">
                <ul>
                    <div>
                        <div className="mainhome_sidebar">
                            <div className="homeIcon">
                                <GoHome size={45} />
                            </div>
                            <div className="sidebar_mainhome_text">
                                <Link to="/">메인 홈</Link>
                            </div>
                        </div>
                        <div className="dashboard_sidebar">
                            <div className="dashboardIcon">
                                <LuLayoutDashboard size={45} />
                            </div>
                            <div className="sidebar_dashboard_text">
                                <Link to={managerInfo ? "/rooms" : "/login"}>대시 보드</Link>
                            </div>
                        </div>
                        <div className="patientlist_sidebar">
                            <div className="patientlistIcon">
                                <IoPersonOutline size={45} />
                            </div>
                            <div className="sidebar_patientlist_text">
                                <Link to={managerInfo ? "/patients" : "/login"}>환자 목록</Link>
                            </div>
                        </div>
                        <div className="setting_sidebar">
                            <div className="settingIcon">
                                <IoSettingsOutline size={45} />
                            </div>
                            <div className="sidebar_setting_text">
                                <Link to={managerInfo ? "#" : "/login"}>환경 설정</Link>
                            </div>
                        </div>
                    </div>
                </ul>
            </div>

            <div className="sidebar-divider">
                <div className="topbar">
                    <div className="peopleIcon">
                        <MdAccountCircle size={50} />
                    </div>
                    <div className="topbar_text">
                        {managerInfo ? (
                            <a onClick={handleMyPageClick}>
                                {managerInfo.name} 님
                            </a>
                        ) : (
                            <Link to="/login">로그인</Link>
                        )}
                    </div>
                    <div className="topbar_text">
                        {managerInfo && (
                            <Link to="/login" onClick={handleLogout}>
                                로그아웃
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
