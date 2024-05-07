import React, { useState, useEffect } from 'react';
import Sidebar from "../MainPage/Sidebar";
import './PatientForm.css';
import {Link} from "react-router-dom";
import axios from "axios";

const PatientFormPage = () => {

    const [patients, setPatients] = useState([]);

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

    return (
        <div>
            <Sidebar/>
            <h1 className="patientform_text">환자 정보</h1>
            {patients.map((patient, index) => (
                <div className="patientform_page" key={index}>
                    <div className="patientform_total_box">
                        <div className="patientform_profile"></div>
                        <div className="patientform_info_box">
                            <div className="patient_name">
                                <label>이름 </label>
                                <span>{patient.name}</span>
                            </div>
                            <div className="patient_home">
                                <label>주소 </label>
                                <span>{patient.home}</span>
                            </div>
                            <div className="patientform_line"></div>
                            <div className="patient_info">
                                <div className="patient_phone_num">
                                    <label>연락처 </label>
                                    <span>{patient.phoneNumber}</span>
                                </div>
                                <div className="patient_age">
                                    <label>나이 </label>
                                    <span>{patient.age}</span>
                                </div>
                                {/*<div className="patient_height">*/}
                                {/*    <label>키 : </label>*/}
                                {/*    <span>{patient.height}</span>*/}
                                {/*</div>*/}
                                {/*<div className="patient_weight">*/}
                                {/*    <label>몸무게 : </label>*/}
                                {/*    <span>{patient.weight}</span>*/}
                                {/*</div>*/}
                                <div className="patient_emergency_num">
                                    <label>비상 연락망 </label>
                                    <span>{patient.emergencyNumber}</span>
                                </div>
                                <div className="patient_gender">
                                    <label>성별 </label>
                                    <span>{patient.gender}</span>
                                </div>
                            </div>
                            <div className="patient_signout_button">
                                <button onClick={() => handleDelete(index)}>삭제</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <div className="patientform_add_patient_button">
                <Link to="/AddPatient"><button>환자 추가</button></Link>
            </div>
        </div>
    );
};

export default PatientFormPage;
