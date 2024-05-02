import React, { useState, useEffect } from 'react';
import './PatientInfoForm.css';
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import axios from "axios";

const PatientFormPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const patientid = location.state.patientid;
    const [patientInfo, setPatientInfo] = useState({
        patientid: '',
        name: '',
        sex: '',
        age: '',
        phone: '',
        email: '',
        address: '',
        emergencycall: '',
        managerid: ''
    });

    useEffect(() => {
        const fetchPatientInfo = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/patient/info?patientid=${patientid}`);
                setPatientInfo(response.data);
            } catch (error) {
                console.error('Error fetching patient info:', error);
            }
        };

        if (patientid) {
            fetchPatientInfo();
        }
    }, [patientid]); // patientid가 변경될 때마다 useEffect 다시 실행

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
        <div className="mypage">
            <h1>환자 정보</h1>
            <div className="total">
                <div className="name">
                    <label>이름 : </label>
                    <span>{patientInfo.name}</span>
                </div>
                <div className="age">
                    <label>나이 : </label>
                    <span>{patientInfo.age}</span>
                </div>
                <div className="sex">
                    <label>성별 : </label>
                    <span>{patientInfo.sex}</span>
                </div>
                <div className="phone">
                    <label>전화번호 : </label>
                    <span>{patientInfo.phone}</span>
                </div>
                <div className="email">
                    <label>이메일 : </label>
                    <span>{patientInfo.email}</span>
                </div>
                <div className="address">
                    <label>주소 : </label>
                    <span>{patientInfo.address}</span>
                </div>
                <div className="emergencycall">
                    <label>비상 연락처 : </label>
                    <span>{patientInfo.emergencycall}</span>
                </div>
                <div className="managerid">
                    <label>manager ID : </label>
                    <span>{patientInfo.managerid}</span>
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
