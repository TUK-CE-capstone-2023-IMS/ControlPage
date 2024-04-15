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
        name: '송채연',
        birthdate: '1990/01/01',
        gender: '여성',
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
        <div className="my_page">
            <h1 className="mypage_text">개인 정보</h1>
            <div className="mypage_totalbox">
                <div className="mypage_name">
                    <label>이름 : </label>
                    <span>{adminInfo.name}</span>
                </div>
                <div className="mypage_birth">
                    <label>생년월일 : </label>
                    <span>{adminInfo.birthdate}</span>
                </div>
                <div className="mypage_gender">
                    <label>성별 : </label>
                    <span>{adminInfo.gender}</span>
                </div>
                <div className="mypage_email">
                    <label>이메일 : </label>
                    <span>{adminInfo.email}</span>
                </div>
                <div className="mypage_phone_num">
                    <label>전화번호 : </label>
                    <span>{adminInfo.phoneNumber}</span>
                </div>
                <div className="mypage_aff">
                    <label>소속 : </label>
                    <span>{adminInfo.affiliation}</span>
                </div>
            </div>
            <div className="mypage_signout_button">
                <button onClick={handleDelete}>회원 탈퇴</button>
            </div>
        </div>
    );
};

export default AdminMyPage;
