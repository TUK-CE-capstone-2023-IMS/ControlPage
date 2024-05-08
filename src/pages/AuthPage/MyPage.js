import React, { useState, useEffect } from 'react';
import Sidebar from "../MainPage/Sidebar";
import './MyPage.css';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

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
    });

    const [isModalOpen, setIsModalOpen] = useState(false); // 모달 창 상태 변수

    useEffect(() => {
        const managerId = localStorage.getItem('managerId');
        if (managerId) {
            const fetchData = async () => {
                try {
                    const response = await axios.get(`http://localhost:8080/manager/info?managerId=${managerId}`);
                    console.log('관리자 정보 요청 성공:', response.data);
                    if (response.data.success) {
                        setAdminInfo(response.data)
                    } else {
                        console.error('관리자 정보 요청 실패:', response.data.message);
                    }
                } catch (error) {
                    console.error('환자 탈퇴 요청 실패:', error.response ? error.response.data : error.message);
                }
            };
            fetchData()
        }
    }, []);

    const handleDelete = async () => {
        try {
            const managerId = localStorage.getItem('managerId');
            const response = await axios.post('http://localhost:8080/manager/signout', {
                managerId: managerId
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

    const openModal = () => {
        setIsModalOpen(true); // 모달 창 열기
    };

    const closeModal = () => {
        setIsModalOpen(false); // 모달 창 닫기
    };

    return (
        <div>
            <Sidebar />
            <h1 className="mypage_text">개인 정보</h1>
            <div className="my_page">
                <div className="mypage_total_box">
                    <div className="mypage_profile"></div>
                    <div className="mypage_info_box">
                        <div className="mypage_name">
                            <label>이름 </label>
                            <span>{adminInfo.name}</span>
                        </div>
                        <div className="mypage_total_btn">
                            <div className="mypage_edit-menu">
                                <Link to="/">
                                    <button className="mypage_edit-menu-btn"></button>
                                </Link>
                            </div>
                            <div className="mypage_delete-menu">
                                <button className="mypage_delete-menu-btn" onClick={openModal}></button>
                            </div>
                        </div>
                        <div className="mypage_aff">
                            <label>소속 </label>
                            <span>{adminInfo.address}</span>
                        </div>
                        <div className="mypage_line"></div>
                        <div className="mypage_info">
                            <div className="mypage_age">
                                <label>나이 </label>
                                <span>{adminInfo.age}</span>
                            </div>
                            <div className="mypage_email">
                                <label>이메일 </label>
                                <span>{adminInfo.email}</span>
                            </div>
                            <div className="mypage_sex">
                                <label>성별 </label>
                                <span>{adminInfo.sex}</span>
                            </div>
                            <div className="mypage_phone_num">
                                <label>전화번호 </label>
                                <span>{adminInfo.phone}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`modal ${isModalOpen ? 'open' : ''}`}>
                <div className="modal_popup">
                    <h3>회원 탈퇴</h3>
                    <p>회원을 탈퇴하시겠습니까?</p>
                    <div className="modal_buttons">
                        <button onClick={handleDelete}>회원 탈퇴</button>
                        <button onClick={closeModal}>취소</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminMyPage;
