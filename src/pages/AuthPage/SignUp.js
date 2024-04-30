import React, { useState } from 'react';
import './SignUp.css';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import lock from "../../image/lock.png"

const SignupPage = () => {
    const [formData, setFormData] = useState({
        managerid:'',
        password: '',
        email: '',
        name: '',
        address: '',
        age: '',
        phone: '',
        gender: '',
        etc: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const navigate  = useNavigate();
    const handleSignup = async () => {
        try {
            const response = await axios.post('http://localhost:8080/manager/signin', formData);
            console.log('회원가입 요청 성공:', response.data);
            if (response.data.success) {
                navigate("/login");
            }
        } catch (error) {
            console.error('회원가입 요청 실패:', error.response ? error.response.data : error.message);
            // 오류 처리
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // 여기에 회원가입 로직 추가
        console.log('회원가입 정보:', formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="signup_page">
                <p className="signup_text">레이더 관리자 서비스 시스템</p>
                <div className="signup_box">
                    <div className="signup_email">
                        <input
                            type="text"
                            name="managerid"
                            value={formData.managerid}
                            onChange={handleChange}
                            placeholder="아이디"
                            id="BsPerson"
                            required
                        />
                    </div>

                    <div className="signup_password_input">
                        <img src={lock} width="24px" height="24px" className="lockIcon"/>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="비밀번호"
                            required
                        />
                    </div>

                    <div className="signup_email">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="이메일"
                            required
                        />
                    </div>

                    <div className="signup_name">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="성명"
                            required
                        />
                    </div>

                    <div className="signup_gender">
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

                    <div className="signup_birth">
                        <input
                            type="date"
                            name="birthday"
                            value={formData.birthday}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="signup_phone_number">
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="전화번호"
                            required
                        />
                    </div>

                    <div className="signup_age">
                        <input
                            type="number"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                            placeholder="나이"
                            required
                        />
                    </div>

                    <div className="signup_etc">
                        <input
                            type="text"
                            name="etc"
                            value={formData.etc}
                            onChange={handleChange}
                            placeholder="소속"
                        />
                    </div>

                </div>

                <div className= "signup_button">
                    <button className="signup_button" type="submit">회원가입</button>
                </div>

                <div className="cancel">
                    <Link to="/login"><button>취소</button></Link>
                </div>
            </div>
        </form>
    );
};

export default SignupPage;
