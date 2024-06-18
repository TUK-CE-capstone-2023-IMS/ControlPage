import React, { useState, useEffect } from 'react';
import './PatientInfoForm.css';
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import axios from "axios";
import Sidebar from "../MainPage/Sidebar";

const PatientFormPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const patientid = location.state.patientid;
    const [patientInfo, setPatientInfo] = useState([]);

    const [isModalOpen, setIsModalOpen] = useState(false); // 모달 창 상태 변수

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/patient/info?patientId=${location.state.patientid}`);

                if (response && response.data) {
                    setPatientInfo(response.data);
                } else {
                    console.error('서버 응답에 데이터가 없음');
                }
            } catch (error) {
                console.error('데이터를 불러오는 중 오류 발생:', error.response ? error.response.data : error.message);
            }
        };

        fetchData();
    }, []);

    const handleDelete = async () => {
        try {
            const response = await axios.delete(`http://localhost:8080/patient/info?patientid=${patientid}`);
            console.log('환자 탈퇴 요청 성공:', response.data);
            if (response.data.success) {
                navigate('/rooms');
            } else {
                console.error('환자 탈퇴 실패:', response.data.message);
            }
        } catch (error) {
            console.error('환자 탈퇴 요청 실패:', error.response ? error.response.data : error.message);
        }
    };

    const handleChangeSetting = async () => {
        navigate('/ChangePatient', {state: {patientid: patientid}});
    };

    const openModal = () => {
        setIsModalOpen(true); // 모달 창 열기
    };

    const closeModal = () => {
        setIsModalOpen(false); // 모달 창 닫기
    };

    return (
        <div>
            <Sidebar/>
            <h1 className="patient_infoform_text">환자 정보</h1>
            <div className="patient_infoform_page">

                <div className="patient_infoform_total_box">

                    <div className="patient_infoform_profile_box">
                        <div className="patient_infoform_profile"></div>
                    </div>

                    <div className="patient_infoform_total_info_box">

                        <div className="patient_infoform_info_box_1">

                            <div className="patient_infoform_first_info">
                                <div className="patient_infoform_name_box">
                                    <p>{patientInfo.name}</p>
                                </div>
                            </div>

                            <div className="patient_infoform_second_info">
                                <div className="patient_infoform_home_box">
                                    <span>{patientInfo.home}</span>
                                </div>
                            </div>
                        </div>

                        <div className="patient_infoform_line"></div>

                        <div className="patient_infoform_info_box_2">

                            <div className="patient_infoform_phone_num_box">
                                <div className="patient_infoform_phone_num_title">
                                    <label>연락처 </label>
                                </div>
                                <div className="patient_infoform_phone_num">
                                    <span>{patientInfo.phoneNumber}</span>
                                </div>
                            </div>

                            <div className="patient_infoform_age_box">
                                <div className="patient_infoform_age_title">
                                    <label>나이 </label>
                                </div>
                                <div className="patient_infoform_age">
                                    <span>{patientInfo.age}</span>
                                </div>
                            </div>

                            <div className="patient_infoform_emergency_num_box">
                                <div className="patient_infoform_emergency_num_title">
                                    <label>비상 연락망 </label>
                                </div>
                                <div className="patient_infoform_emergency_num">
                                    <span>{patientInfo.emergencyNumber}</span>
                                </div>
                            </div>

                            <div className="patient_infoform_gender_box">
                                <div className="patient_infoform_gender_title">
                                    <label>성별 </label>
                                </div>
                                <div className="patient_infoform_gender">
                                    <span>{patientInfo.gender}</span>
                                </div>
                            </div>
                        </div>

                        <div className="patient_infoform_total_btn">
                                <button className="patient_infoform_edit_menu_btn" onClick={handleChangeSetting}>
                                    <div className="patient_infoform_edit_btn_input">
                                        <div className="patient_infoform_edit_btn">
                                            <img src={require('./pencil_btn.png')} alt="pencil_btn" />
                                        </div>
                                        <p className="patient_infoform_edit_btn_text">수정</p>
                                    </div>
                                </button>

                                <button className="patient_infoform_delete_menu_btn" onClick={openModal}>
                                    <div className="patient_infoform_delete_btn_input">
                                        <div className="patient_infoform_delete_btn">
                                            <img src={require('./delete_btn.png')} alt="delete_btn" />
                                        </div>
                                        <p className="patient_infoform_delete_btn_text">삭제</p>
                                    </div>
                                </button>
                        </div>

                    </div>

                </div>

            </div>
            {/*<div className="button-group">*/}
            {/*    <button onClick={handleChangeSetting}>환자 정보 수정</button>*/}
            {/*    <button onClick={handleDelete}>환자 삭제</button>*/}
            {/*    <Link to="/rooms"><button>취소</button></Link>*/}
            {/*</div>*/}
            <div className={`modal ${isModalOpen ? 'open' : ''}`}>
                <div className="patient_infoform_modal_popup">
                    <p>해당 환자의 정보를 삭제하시겠습니까?</p>
                    <div className="patient_infoform_modal_buttons">
                        <div className="patient_infoform_modal_delete_btn">
                            <button onClick={handleDelete}>확인</button>
                        </div>
                        <div className="patient_infoform_modal_cancel_btn">
                            <button onClick={closeModal}>취소</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default PatientFormPage;
