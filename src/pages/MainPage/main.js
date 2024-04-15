import React from 'react';
import './main.css';
import Sidebar from "./Sidebar";
import Calendar from "./Calendar";

const MainPage = () => {
    return (
        <div className="mainpage-layout">

            <Sidebar />
            <div className="main_page">
                <div className="main_hello_box">
                    <div className= "main_hello_text">
                        <p className="main_text1">환영합니다.</p>
                        <p className="main_text2">대시보드를 통해 환자 모니터링 및 관리를 시작해보세요!</p>
                    </div>
                </div>
                <Calendar/>
            </div>
        </div>
    );
};

export default MainPage;
