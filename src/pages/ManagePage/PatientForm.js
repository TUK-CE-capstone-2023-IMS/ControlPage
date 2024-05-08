import React, { useState, useEffect } from 'react';
import Sidebar from "../MainPage/Sidebar";
import './PatientForm.css';
import {Link} from "react-router-dom";
import axios from "axios";

const PatientFormPage = () => {

    const [patients, setPatients] = useState([]);

    const [isModalOpen, setIsModalOpen] = useState(false); // 모달 창 상태 변수

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/patient/read');

                if (response && response.data) {
                    setPatients(response.data);
                } else {
                    console.error('서버 응답에 데이터가 없음');
                }
            } catch (error) {
                console.error('데이터를 불러오는 중 오류 발생:', error.response ? error.response.data : error.message);
            }
        };

        fetchData();
    }, []);
    const handleDelete = (index) => {
        const updatedPatients = [...patients];
        updatedPatients.splice(index, 1);
        setPatients(updatedPatients);
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
            <h1 className="patientform_text">환자 정보</h1>
            {patients.map((patient, index) => (
                <div className="patientform_page" key={index}>

                    <div className="patientform_total_box">

                        <div className="patientform_profile_box">
                            <div className="patientform_profile"></div>
                        </div>

                        <div className="patientform_total_info_box">

                            <div className="patientform_info_box_1">

                                <div className="patientform_first_info">
                                    <div className="patientform_name_box">
                                        <p>{patient.name}</p>
                                    </div>
                                    <div className="patientform_total_btn">
                                        <div className="patientform_edit-menu">
                                            <Link to="/">
                                                <button className="patientform_edit-menu-btn"></button>
                                            </Link>
                                        </div>
                                        <div className="patientform_delete-menu">
                                            <button className="patientform_delete-menu-btn" onClick={openModal}></button>
                                        </div>
                                    </div>
                                </div>

                                <div className="patientform_second_info">
                                    <div className="patientform_home_box">
                                        <p>avaegdagddf</p>
                                        {/*<span>{patient.home}</span>*/}
                                    </div>
                                </div>
                            </div>

                            <div className="patientform_line"></div>

                            <div className="patientform_info_box_2">

                                <div className="patientform_phone_num_box">
                                    <div className="patientform_phone_num_title">
                                        <label>연락처 </label>
                                    </div>
                                    <div className="patientform_phone_num">
                                        <span>{patient.phoneNumber}</span>
                                    </div>
                                </div>

                                <div className="patientform_age_box">
                                    <div className="patientform_age_title">
                                        <label>나이 </label>
                                    </div>
                                    <div className="patientform_age">
                                        <span>{patient.age}</span>
                                    </div>
                                </div>

                                <div className="patientform_emergency_num_box">
                                    <div className="patientform_emergency_num_title">
                                        <label>비상 연락망 </label>
                                    </div>
                                    <div className="patientform_emergency_num">
                                        <span>{patient.emergencyNumber}</span>
                                    </div>
                                </div>

                                <div className="patientform_gender_box">
                                    <div className="patientform_gender_title">
                                        <label>성별 </label>
                                    </div>
                                    <div className="patientform_gender">
                                        <span>{patient.gender}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            ))}

            <div className="patientform_add_patient_button">
                <Link to="/AddPatient"><button>환자 추가</button></Link>
            </div>

            <div className={`modal ${isModalOpen ? 'open' : ''}`}>
                <div className="modal_popup">
                    <h3>환자 삭제</h3>
                    <p>환자를 삭제하시겠습니까?</p>
                    <div className="modal_buttons">
                        <button onClick={handleDelete}>삭제</button>
                        <button onClick={closeModal}>취소</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PatientFormPage;
