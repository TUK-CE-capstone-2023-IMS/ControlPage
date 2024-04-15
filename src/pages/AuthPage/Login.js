import React, { useState } from 'react';
import './Login.css';

const LoginPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log('Email:', email);
        console.log('Password:', password);

    };

    return (
        <div class = "login_page">
            <div class = "login_box">
                <p class= "login_title">레이더 관리자 서비스 시스템</p>
                <form onSubmit={handleSubmit}>
                    <div>
                        <div class= "login_id">
                            <label htmlFor="email">아이디</label>
                        </div>
                        <div class = "login_idbox">
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required/>
                        </div>
                    </div>
                    <div>
                        <div class= "login_password">
                            <label htmlFor="password">비밀번호</label>
                        </div>
                        <div class = "login_passwordbox">
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required/>
                        </div>
                    </div>
                    <div className="login_forgot_msg">
                        <p>아이디 또는 비밀번호를 잃어버리셨나요?</p>
                    </div>
                    <div className = "login_total_button">
                        <div className="login_button">
                            <button type="submit">로그인</button>
                        </div>
                        <div className="signin_button">
                            <button type="submit">회원가입</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default LoginPage;
