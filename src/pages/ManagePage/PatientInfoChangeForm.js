import React, {useState, useEffect} from 'react';
import './PatientInfoChangeForm.css';
import {Link, useNavigate, useLocation} from "react-router-dom";
import axios from "axios";
import Sidebar from "../MainPage/Sidebar";
import {API} from "../../apis/config";

const PatientInfoChangeFormPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
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
                const response = await axios.get(`${API.PATIENT_READ}=${location.state.patientid}`);
                setFormData(response.data);
            } catch (error) {
                console.error('환자 정보를 받아오는데 실패했습니다:', error);
            }
        };
        fetchPatientInfo();
    }, []);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const cancel = async (e) => {
        navigate("/patients", {state: {patientid: location.state.patientid}});
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(API.PATIENT_UPDATE, formData);
            if (response.data.success) {
                navigate("/patients", {state: {patientid: location.state.patientid}});
            }
        } catch (error) {
            console.error('환자 정보 수정 실패:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Sidebar/>
            <p className="change_patient_text">정보 수정</p>

            <div className="change_patient_page">

                <div className="change_patient_total_box">

                    <div className="change_patient_info_box">

                        <div className="change_patient_profile_box">
                            <div className="change_patient_profile"></div>
                        </div>

                        <div className="change_patient_box">
                            {/*<div className="change_patient_id">*/}
                            {/*    <input*/}
                            {/*        type="text"*/}
                            {/*        name="patientid"*/}
                            {/*        value={formData.patientid}*/}
                            {/*        onChange={handleChange}*/}
                            {/*        placeholder="환자 ID"*/}
                            {/*        required*/}
                            {/*    />*/}
                            {/*</div>*/}
                            <div className="change_patient_name_box">
                                <div className="change_patient_name_title">
                                    <label>이름</label>
                                </div>

                                <div className="change_patient_name">
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="이름"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="change_patient_address_box">
                                <div className="change_patient_address_title">
                                    <label>소속</label>
                                </div>

                                <div className="change_patient_address">
                                    <input
                                        type="text"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        placeholder="주소"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="change_patient_phone_num_box">
                                <div className="change_patient_phone_num_title">
                                    <label>연락처</label>
                                </div>

                                <div className="change_patient_phone_num">
                                    <input
                                        type="text"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="전화번호"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="change_patient_email_box">
                                <div className="change_patient_email_title">
                                    <label>이메일</label>
                                </div>

                                <div className="change_patient_email">
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="이메일"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="change_patient_age_box">
                                <div className="change_patient_age_title">
                                    <label>나이</label>
                                </div>

                                <div className="change_patient_age">
                                    <input
                                        type="text"
                                        name="age"
                                        value={formData.age}
                                        onChange={handleChange}
                                        placeholder="나이"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="change_patient_sex_box">
                                <div className="change_patient_sex_title">
                                    <label>성별</label>
                                </div>

                                <div className="change_patient_sex">
                                    <select
                                        name="sex"
                                        value={formData.sex}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">성별 선택</option>
                                        <option value="male">남자</option>
                                        <option value="female">여자</option>
                                    </select>
                                </div>
                            </div>

                            <div className="change_patient_emergency_num_box">
                                <div className="change_patient_emergency_num_title">
                                    <label>비상연락망</label>
                                </div>

                                <div className="change_patient_emergency_num">
                                    <input
                                        type="text"
                                        name="emergencycall"
                                        value={formData.emergencycall}
                                        onChange={handleChange}
                                        placeholder="비상 연락처"
                                        required
                                    />
                                </div>
                            </div>

                            {/*<div className="change_patient_managerid">*/}
                            {/*    <input*/}
                            {/*        type="text"*/}
                            {/*        name="managerid"*/}
                            {/*        value={formData.managerid}*/}
                            {/*        onChange={handleChange}*/}
                            {/*        placeholder="manager ID"*/}
                            {/*        required*/}
                            {/*    />*/}
                            {/*</div>*/}
                        </div>
                    </div>

                    <div className="change_patient_total_button">
                        <div className="change_patient_yesbtn">
                            <button type="submit">확인</button>
                        </div>

                        <div className="change_patient_nobtn">
                            <button onClick={cancel}>취소</button>
                        </div>
                    </div>

                </div>

            </div>
        </form>
    );
};

export default PatientInfoChangeFormPage;
