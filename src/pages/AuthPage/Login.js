import React, { useState } from 'react';
import './Login.css';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate(); // useNavigate 훅 사용

    const [managerId, setManagerId] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/manager/login', {
                managerId: managerId,
                password: password
            });

            if (response && response.data && response.data.success) { // 성공적으로 로그인한 경우
                console.log('로그인 요청 성공:', response.data);
                localStorage.setItem('managerId', managerId);
                setManagerId('');
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
            <div className="box">
                <p className="title">레이더 관리자 서비스 시스템</p>
                <form onSubmit={handleSubmit}>
                    <div>
                        <div className="id">
                            <label htmlFor="managerId">아이디</label>
                        </div>
                        <div className="idbox">
                            <input
                                type="text"
                                id="managerId"
                                value={managerId}
                                onChange={(e) => setManagerId(e.target.value)}
                                required />
                        </div>
                    </div>
                    <div>
                        <div className="password">
                            <label htmlFor="password">비밀번호</label>
                        </div>
                        <div className="passwordbox">
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required />
                        </div>
                    </div>
                    <div className="forgot">
                        <p>아이디 또는 비밀번호를 잃어버리셨나요?</p>
                    </div>
                    <div className="total_button">
                        <div className="login_button">
                            <button type="submit">로그인</button>
                        </div>
                        <div className="signin_button">
                            <Link to="/signup"><button>회원가입</button></Link>
                        </div>
                        <div cancel>
                            <Link to="/"><button>취소</button></Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
