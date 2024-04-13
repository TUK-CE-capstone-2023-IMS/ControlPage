import React, { useState } from 'react';
import './SignUp.css';

const SignupPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        fullName: '',
        birthday: '',
        gender: '남자',
        phoneNumber: '',
        affiliation: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // 여기에 회원가입 로직 추가
        console.log('회원가입 정보:', formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="signup_page">
                <p>레이더 관리자 서비스 시스템</p>
                <div className="boxes">
                    <div className="email">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="이메일"
                            required
                        />
                    </div>
                    <div className="password_input">
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="비밀번호"
                            required
                        />
                    </div>
                    <div className="name">
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="성명"
                            required
                        />
                    </div>
                    <div className="gender">
                        <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            required
                        >
                            <option value="남자">남자</option>
                            <option value="여자">여자</option>
                        </select>
                    </div>
                    <div className="birth">
                        <input
                            type="date"
                            name="birthday"
                            value={formData.birthday}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="phone_number">
                        <input
                            type="text"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            placeholder="전화번호"
                            required
                        />
                    </div>
                    <div className="affiliation">
                        <input
                            type="text"
                            name="affiliation"
                            value={formData.affiliation}
                            onChange={handleChange}
                            placeholder="소속"
                            required
                        />
                    </div>
                </div>
                <div signup_button>
                    <button type="submit">회원가입</button>
                </div>
            </div>
        </form>
    );
};

export default SignupPage;
