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
                // 페이지 리로드 또는 환자 목록으로 이동
                navigate('/rooms');
            } else {
                console.error('환자 탈퇴 실패:', response.data.message);
            }
        } catch (error) {
            console.error('환자 탈퇴 요청 실패:', error.response ? error.response.data : error.message);
        }
    };

    const handleChangeSetting = async () => {
        navigate('/PatientInfoChangeForm', {state: {patientid: patientid}});
    };

    return (
        <div>
            <Sidebar/>
            <h1 className="patientform_text">환자 정보</h1>
            <div className="patientform_page">
                <div className="patient_total_box">
                    <div className="patient_name">
                        <label>이름 </label>
                        <span>{patientInfo.name}</span>
                    </div>
                    <div className="patient_home">
                        <label>주소 </label>
                        <span>{patientInfo.home}</span>
                    </div>
                    <div className="patientform_line"></div>
                    <div className="patient_info">
                        <div className="patient_phone_num">
                            <label>연락처 </label>
                            <span>{patientInfo.phoneNumber}</span>
                        </div>
                        <div className="patient_age">
                            <label>나이 </label>
                            <span>{patientInfo.age}</span>
                        </div>
                        {/*<div className="patient_height">*/}
                        {/*    <label>키 : </label>*/}
                        {/*    <span>{patientInfo.height}</span>*/}
                        {/*</div>*/}
                        {/*<div className="patient_weight">*/}
                        {/*    <label>몸무게 : </label>*/}
                        {/*    <span>{patientInfo.weight}</span>*/}
                        {/*</div>*/}
                        <div className="patient_emergency_num">
                            <label>비상 연락망 </label>
                            <span>{patientInfo.emergencyNumber}</span>
                        </div>
                        <div className="patient_gender">
                            <label>성별 </label>
                            <span>{patientInfo.gender}</span>
                        </div>
                    </div>
                    <div className="patient_signout_button">
                        <button onClick={handleDelete}>삭제</button>
                    </div>
                </div>
            </div>
            <div className="button-group">
                <button onClick={handleChangeSetting}>환자 정보 수정</button>
                <button onClick={handleDelete}>환자 삭제</button>
                <Link to="/rooms"><button>취소</button></Link>
            </div>
        </div>

    );
};

export default PatientFormPage;
