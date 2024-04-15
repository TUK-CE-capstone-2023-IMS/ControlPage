import React, { useState } from 'react';
import './ForgotPassword.css';

const ForgotPasswordPage = () => {
    const [formData, setFormData] = useState({
        email: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleForgotPassword = (e) => {
        e.preventDefault();
        // 여기에서 이메일을 통한 비밀번호 재설정 로직을 구현.
        console.log('이메일을 통한 비밀번호 재설정 요청:', formData);
    };

    return (
        <form onSubmit={handleForgotPassword}>
            <div className="forgotpassword_page">
                <p class="forgotpassword_msg">비밀번호를 찾고자 하는 아이디를 입력해주세요.</p>
                <div className="forgotpassword_email">
                    <label htmlFor="email"> </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="이메일"
                        required
                    />
                </div>
                <button className="forgotpassword_button" type="submit">비밀번호 재설정</button>
            </div>
        </form>
    );
};

export default ForgotPasswordPage;
