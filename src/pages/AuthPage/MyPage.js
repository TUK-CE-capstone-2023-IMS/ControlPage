import React, { useState, useEffect } from 'react';
import './MyPage.css';
const AdminMyPage = () => {

    const [adminInfo, setAdminInfo] = useState({
        name: '',
        birthdate: '',
        gender: '',
        email: '',
        phoneNumber: '',
        affiliation: ''
    });

    const savedAdminInfo = {
        name: '관리자',
        birthdate: '1990/01/01',
        gender: '남성',
        email: 'admin@example.com',
        phoneNumber: '010-1234-5678',
        affiliation: '회사명'
    };

    useEffect(() => {
        setAdminInfo(savedAdminInfo);
    }, []);

    const handleDelete = () => {
        // 여기에 삭제 로직 구현
        // 이 예시에서는 단순히 상태를 초기화.
        setAdminInfo({
            name: '',
            birthdate: '',
            gender: '',
            email: '',
            phoneNumber: '',
            affiliation: ''
        });
    };

    return (
        <div className="mypage">
            <h1>개인 정보</h1>
            <div className="total">
                <div className="name">
                    <label>이름 : </label>
                    <span>{adminInfo.name}</span>
                </div>
                <div className="birth">
                    <label>생년월일 : </label>
                    <span>{adminInfo.birthdate}</span>
                </div>
                <div className="gender">
                    <label>성별 : </label>
                    <span>{adminInfo.gender}</span>
                </div>
                <div className="email">
                    <label>이메일 : </label>
                    <span>{adminInfo.email}</span>
                </div>
                <div className="phone_num">
                    <label>전화번호 : </label>
                    <span>{adminInfo.phoneNumber}</span>
                </div>
                <div className="aff">
                    <label>소속 : </label>
                    <span>{adminInfo.affiliation}</span>
                </div>
            </div>
            <div className="signout_button">
                <button onClick={handleDelete}>회원 탈퇴</button>
            </div>
        </div>
    );
};

export default AdminMyPage;
