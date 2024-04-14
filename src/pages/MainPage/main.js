import React from 'react';
import './main.css';
import Sidebar from "./Sidebar";
import Calendar from "./Calendar";

const MainPage = () => {
    return (
        <div className="page-layout">

            <Sidebar />
            <div className="main-content">
                <div className="hello_box">
                    <div className= "hello_text">
                        <p className="text1">환영합니다.</p>
                        <p className="text2">대시보드를 통해 환자 모니터링 및 관리를 시작해보세요!</p>
                    </div>
                </div>
                <Calendar/>
            </div>
        </div>
    );
};

export default MainPage;
