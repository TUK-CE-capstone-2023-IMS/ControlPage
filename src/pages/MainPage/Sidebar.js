import React, {useEffect} from 'react';
import './Sidebar.css';
import { MdHomeFilled } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

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
                            <a href="./rooms">대시 보드</a>
                        </div>
                        {/*<div className="sidebar_text">*/}
                        {/*    <a href="./patients">환자 목록</a>*/}
                        {/*</div>*/}
                        {/*<div className="sidebar_text">*/}
                        {/*    <a href="#">환경 설정</a>*/}
                        {/*</div>*/}
                    </div>
                </ul>
            </div>
            <div className="sidebar-divider">
                <div className="topbar">
                    <div className="peopleIcon">
                        <MdAccountCircle size={50}/>
                    </div>
                    <div className="topbar_text">
                        <a href="./mypage">{managername} 님</a>
                    </div>
                    <div className="topbar_text">
                        <a href="#" onClick={handleLogout}>로그아웃</a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Sidebar;
