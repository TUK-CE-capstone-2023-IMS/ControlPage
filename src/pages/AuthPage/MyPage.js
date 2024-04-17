import React, { useState, useEffect } from 'react';
import './MyPage.css';
import axios from 'axios';
import {Link, useNavigate} from "react-router-dom";

const AdminMyPage = () => {
    const navigate = useNavigate();
    const [adminInfo, setAdminInfo] = useState({
        managerid: '',
        name: '',
        age: '',
        sex: '',
        phone: '',
        email: '',
        address: '',
        etc: ''
    });

    useEffect(() => {
        const managerid = localStorage.getItem('managerid');
        if (managerid) {
            fetch(`http://localhost:8080/manager/info?managerid=${managerid}`)
                .then(response => response.json())
                .then(data => {
                    setAdminInfo(data);
                })
                .catch(error => {
                    console.error('Error fetching admin info:', error);
                });
        }
    }, []);

    const handleDelete = async () => {
        try {
            const managerid = localStorage.getItem('managerid');
            const response = await axios.post('http://localhost:8080/manager/signout', {
                managerid: managerid
            });
            console.log('회원 탈퇴 요청 성공:', response.data);

            if (response.data.success) {
                // 회원 탈퇴 성공 시 로컬 스토리지에서 관리자 ID 삭제
                localStorage.clear()

                // 페이지 리로드 또는 로그아웃 등 추가 작업 수행
                navigate('/login');
            } else {
                console.error('회원 탈퇴 실패:', response.data.message);
            }
        } catch (error) {
            console.error('회원 탈퇴 요청 실패:', error.response ? error.response.data : error.message);
        }
    };


    return (
        <div className="mypage">
            <h1>개인 정보</h1>
            <div className="total">
                <div className="name">
                    <label>이름 : </label>
                    <span>{adminInfo.name}</span>
                </div>
                <div className="age">
                    <label>나이 : </label>
                    <span>{adminInfo.age}</span>
                </div>
                <div className="sex">
                    <label>성별 : </label>
                    <span>{adminInfo.sex}</span>
                </div>
                <div className="phone">
                    <label>전화번호 : </label>
                    <span>{adminInfo.phone}</span>
                </div>
                <div className="email">
                    <label>이메일 : </label>
                    <span>{adminInfo.email}</span>
                </div>
                <div className="address">
                    <label>주소 : </label>
                    <span>{adminInfo.address}</span>
                </div>
                <div className="etc">
                    <label>기타 : </label>
                    <span>{adminInfo.etc}</span>
                </div>
            </div>
            <div className="signout_button">
                <button onClick={handleDelete}>회원 탈퇴</button>
            </div>
            <div cancel>
                <Link to="/"><button>취소</button></Link>
            </div>
        </div>
    );
};

export default AdminMyPage;
