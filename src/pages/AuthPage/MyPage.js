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

                    <div className="mypage_profile_box">
                        <div className="mypage_profile"></div>
                    </div>

                    <div className="mypage_total_info_box">

                        <div className="mypage_info_box_1">

                            <div className="mypage_first_info">
                                <div className="mypage_name_box">
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
                            </div>

                            <div className="mypage_second_info">
                                <div className="mypage_aff_box">
                                    <span>{adminInfo.address}</span>
                                </div>
                            </div>

                        </div>

                        <div className="mypage_line"></div>

                        <div className="mypage_info_box_2">

                            <div className="mypage_age_box">
                                <div className="mypage_age_title">
                                    <label>나이 </label>
                                </div>
                                <div className="mypage_age">
                                    <span>{adminInfo.age}</span>
                                </div>
                            </div>

                            <div className="mypage_email_box">
                                <div className="mypage_email_title">
                                    <label>이메일 </label>
                                </div>
                                <div className="mypage_email">
                                    <span>{adminInfo.email}</span>
                                </div>
                            </div>

                            <div className="mypage_sex_box">
                                <div className="mypage_sex_title">
                                    <label>성별 </label>
                                </div>
                                <div className="mypage_sex">
                                    <span>{adminInfo.sex}</span>
                                </div>
                            </div>

                            <div className="mypage_phone_num_box">
                                <div className="mypage_phone_num_title">
                                    <label>전화번호 </label>
                                </div>
                                <div className="mypage_phone_num">
                                    <span>{adminInfo.phone}</span>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <div className={`modal ${isModalOpen ? 'open' : ''}`}>
                <div className="mypage_modal_popup">
                    <h3>회원 탈퇴</h3>
                    <p>회원을 탈퇴하시겠습니까?</p>
                    <div className="mypage_modal_buttons">
                        <div className="mypage_modal_delete_btn">
                            <button onClick={handleDelete}>탈퇴</button>
                        </div>
                        <div className="mypage_modal_cancel_btn">
                            <button onClick={closeModal}>취소</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminMyPage;
