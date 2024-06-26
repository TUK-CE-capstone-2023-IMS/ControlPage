import React, { useState, useEffect } from 'react';
import Sidebar from "../MainPage/Sidebar";
import './PatientForm.css';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {API} from "../../apis/config";

const PatientFormPage = () => {

    const navigate = useNavigate()
    const [patients, setPatients] = useState([]);

    const [isModalOpen, setIsModalOpen] = useState(false); // 모달 창 상태 변수

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(API.PATIENTS_READ);

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
    const handleChangeSetting = async (patientid) => {
        console.log(patientid)
        navigate('/ChangePatient', {state: {patientid: patientid}});
    };
    return (
        <div>
            <Sidebar/>
            <h1 className="patientform_text">환자 정보</h1>
            {patients.map((patient) => (
                <div className="patientform_page" key={patient.patientid}>

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
                                </div>

                                <div className="patientform_second_info">
                                    <div className="patientform_home_box">
                                        <span>{patient.home}</span>
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
                                        <span>{patient.phone}</span>
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
                                        <span>{patient.emergencycall}</span>
                                    </div>
                                </div>

                                <div className="patientform_gender_box">
                                    <div className="patientform_gender_title">
                                        <label>성별 </label>
                                    </div>
                                    <div className="patientform_gender">
                                        <span>{patient.sex}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="patientform_total_btn">

                                <button className="patientform_edit_menu_btn" onClick={()=>handleChangeSetting(patient.patientid)}>
                                    <div className="patientform_edit_btn_input">
                                        <div className="patientform_edit_btn">
                                            <img src={require('./pencil_btn.png')} alt="pencil_btn" />
                                        </div>
                                        <p className="patientform_edit_btn_text">수정</p>
                                    </div>
                                </button>

                                <button className="patientform_delete_menu_btn" onClick={openModal}>
                                    <div className="patientform_delete_btn_input">
                                        <div className="patientform_delete_btn">
                                            <img src={require('./delete_btn.png')} alt="delete_btn" />
                                        </div>
                                        <p className="patientform_delete_btn_text">삭제</p>
                                    </div>
                                </button>

                            </div>

                        </div>

                    </div>

                </div>
            ))}

            <div className="patientform_add_patient_button">
                <Link to="/AddPatient"><button></button></Link>
            </div>

            <div className={`modal ${isModalOpen ? 'open' : ''}`}>
                <div className="patientform_modal_popup">
                    <p>해당 환자의 정보를 삭제하시겠습니까?</p>
                    <div className="patientform_modal_buttons">
                        <div className="patientform_modal_delete_btn">
                            <button onClick={handleDelete}>확인</button>
                        </div>
                        <div className="patientform_modal_cancel_btn">
                            <button onClick={closeModal}>취소</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PatientFormPage;
