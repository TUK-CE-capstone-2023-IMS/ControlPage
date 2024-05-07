import React, { useState } from 'react';
import './Login.css';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();

    const [managerid, setManagerid] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/manager/login', {
                managerid: managerid,
                password: password
            });

            if (response && response.data && response.data.success) { // 성공적으로 로그인한 경우
                console.log('로그인 요청 성공:', response.data);
                localStorage.setItem('managerid', managerid);
                localStorage.setItem('managername', response.data.name);
                setManagerid('');
                setPassword('');
                navigate('/'); // '/'로 페이지 이동
            } else {
                console.error('서버 응답에 데이터가 없거나 로그인 실패');
            }
        } catch (error) {
            console.error('로그인 요청 실패:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <div className="login_page">
            <div className="login_box">
                <p className="login_title">레이더 관리자 서비스 시스템</p>

                <form onSubmit={handleSubmit}>
                    <div className="login_id">
                        <div className="login_id_text">
                            <label htmlFor="managerId">아이디</label>
                        </div>

                        <div className="login_idbox">
                            <input
                                type="text"
                                id="managerid"
                                value={managerid}
                                onChange={(e) => setManagerid(e.target.value)}
                                required />
                        </div>
                    </div>

                    <div class= "login_password">
                        <div class= "login_password_text">
                            <label htmlFor="password">비밀번호</label>
                        </div>

                        <div className="login_passwordbox">
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required />
                        </div>
                    </div>

                    <div className="login_total_button">
                        <div className="login_button">
                            <button type="submit">로그인</button>
                        </div>

                        <div className="signin_button">
                            <Link to="/signup"><button>회원가입</button></Link>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default LoginPage;
