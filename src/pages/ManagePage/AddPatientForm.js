import React, {useState, useEffect} from 'react';
import './AddPatientForm.css';
import {Link, useNavigate, useLocation} from "react-router-dom";
import axios from "axios";
import {API} from "../../apis/config";

const AddPatientFormPage = () => {
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
    }, []);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const cancel = async (e) => {
        navigate("/");
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // 수정된 환자 정보를 서버로 전송하여 업데이트하는 요청
            const response = await axios.post(API.PATIENT_UPDATE, formData);
            if (response.data.success) {
                navigate("");
            }
        } catch (error) {
            console.error('환자 생성 실패:', error.response ? error.response.data : error.message);
            // 오류 처리
        }
    };

    return (
        <form onSubmit={handleSubmit}>
                <div className="add_patient_page">
                    <div className="add_patient_text">
                        <p>Add Patient</p>
                    </div>
                    <div className="add_patient_box">
                        <div className="add_patient_id">
                            <input
                                type="text"
                                name="patientid"
                                value={formData.patientid}
                                onChange={handleChange}
                                placeholder="환자 ID"
                                required
                            />
                        </div>
                        <div className="add_patient_name">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="이름"
                                required
                            />
                        </div>
                        <div className="add_patient_age">
                            <input
                                type="text"
                                name="age"
                                value={formData.age}
                                onChange={handleChange}
                                placeholder="나이"
                                required
                            />
                        </div>
                        <div className="add_patient_sex">
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
                        <div className="add_patient_phone_num">
                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="전화번호"
                                required
                            />
                        </div>
                        <div className="add_patient_email">
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="이메일"
                                required
                            />
                        </div>
                        <div className="add_patient_address">
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                placeholder="주소"
                                required
                            />
                        </div>
                        <div className="add_patient_emergency_num">
                            <input
                                type="text"
                                name="emergencycall"
                                value={formData.emergencycall}
                                onChange={handleChange}
                                placeholder="비상 연락처"
                                required
                            />
                        </div>
                        <div className="add_patient_managerid">
                            <input
                                type="text"
                                name="managerid"
                                value={formData.managerid}
                                onChange={handleChange}
                                placeholder="manager ID"
                                required
                            />
                        </div>
                    </div>
                    <div className="add_patient_button">
                        <div className="add_patient_yesbtn">
                            <button type="submit">확인</button>
                        </div>
                        <div className="add_patient_nobtn">
                            <button onClick={cancel}>취소</button>
                        </div>
                    </div>
                </div>
        </form>
    );
};

export default AddPatientFormPage;
