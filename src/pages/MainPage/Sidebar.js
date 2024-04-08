import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar-container">
            <div className="sidebar open">
                <ul>
                    <div>
                        <div className="content">
                            <a href="/">메인 홈</a>
                        </div>
                        <div>
                            <a href="./dashboard">대시 보드</a>
                        </div>
                        <div>
                            <a href="./rooms">환자 목록</a>
                        </div>
                        <div>
                            <a href="#">환경 설정</a>
                        </div>
                    </div>
                </ul>
            </div>
            <div className="sidebar-divider">
                <div className="content1">
                    <div className="content2">
                        <a href="#">송채연 님</a>
                    </div>
                    <div className="content2">
                        <a href="#">로그아웃</a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Sidebar;
