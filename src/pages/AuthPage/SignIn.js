import React, { useState } from 'react';
import './SignIn.css';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import lock from "../../image/lock.png"
import {API} from "../../apis/config";

const SignupPage = () => {
    const [formData, setFormData] = useState({
        managerid:'',
        password: '',
        email: '',
        name: '',
        address: '',
        age: '',
        phone: '',
        sex: '',
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
    const handleSignIn = async () => {
        try {
            const response = await axios.post(API.SIGN_IN, formData);
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
        console.log('회원가입 정보:', formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="signup_wrap">

                <div className="signup_page">

                    <div className="signup_wrap_box">

                        <div className="signup_box">
                            <div className="signup_total_box">
                                <div className="signup_title">SignIn</div>

                                <div className="signup_input_box">
                                    <div className="signup_id">
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
                                        {/*<img src={lock} width="24px" height="24px" className="lockIcon"/>*/}
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

                                    <div className="signup_sex">
                                        <select
                                            name="sex"
                                            value={formData.sex}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">성별 선택</option>
                                            <option value="male">남자</option>
                                            <option value="female">여자</option>
                                        </select>
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

                                    <div className="signup_address">
                                        <input
                                            type="text"
                                            name="address"
                                            value={formData.address}
                                            onChange={handleChange}
                                            placeholder="주소"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className= "signup_button">
                                    <button className="signup_button" type="submit" onClick={handleSignIn}>회원가입</button>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="signup_hello_box">
                        <div className="signup_hello_text">
                            <div className="signup_first_hello_box">
                                <div className="signup_hello_text_1">환영합니다!</div>
                                <div className="signup_hello_text_2">대시보드를 통해 환자 모니터링 및 관리를 시작해보세요!</div>
                            </div>
                            <div className="signup_second_hello_box">
                                <div className="signup_hello_text_3">이미 계정이 있으신가요?</div>
                                <div className="signup_hello_text_4">
                                    <a href="/login">로그인 하러가기</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </form>
    );
};

export default SignupPage;
