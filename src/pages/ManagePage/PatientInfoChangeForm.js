import React, {useState, useEffect} from 'react';
import './PatientInfoChangeForm.css';
import {Link, useNavigate, useLocation} from "react-router-dom";
import axios from "axios";

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
        // 페이지가 시작될 때 환자 정보를 받아오는 함수
        const fetchPatientInfo = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/patient/info?patientid=${location.state.patientid}`);
                // 받아온 환자 정보를 formData에 설정
                setFormData(response.data);
            } catch (error) {
                console.error('환자 정보를 받아오는데 실패했습니다:', error);
            }
        };

        // 환자 정보를 받아오기 위한 함수 호출
        fetchPatientInfo();
    }, [location.state.patientid]);

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
            // 수정된 환자 정보를 서버로 전송하여 업데이트하는 요청
            const response = await axios.put('http://localhost:8080/patient/info', formData);
            if (response.data.success) {
                navigate("/patients", {state: {patientid: location.state.patientid}});
            }
        } catch (error) {
            console.error('환자 정보 수정 실패:', error.response ? error.response.data : error.message);
            // 오류 처리
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="signup_page">
                <p>환자 정보 수정</p>
                <div className="boxes">
                    <div className="id">
                        <input
                            type="text"
                            name="patientid"
                            value={formData.patientid}
                            onChange={handleChange}
                            placeholder="환자 ID"
                            required
                        />
                    </div>
                    <div className="name">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="이름"
                            required
                        />
                    </div>
                    <div className="age">
                        <input
                            type="text"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                            placeholder="나이"
                            required
                        />
                    </div>
                    <div className="sex">
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
                    <div className="phone_number">
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="전화번호"
                            required
                        />
                    </div>
                    <div className="email">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="이메일"
                            required
                        />
                    </div>
                    <div className="address">
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder="주소"
                            required
                        />
                    </div>
                    <div className="emergencycall">
                        <input
                            type="text"
                            name="emergencycall"
                            value={formData.emergencycall}
                            onChange={handleChange}
                            placeholder="비상 연락처"
                            required
                        />
                    </div>
                    <div className="managerid">
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
                <div className="button-group">
                    <button type="submit">확인</button>
                    <button onClick={cancel}>취소</button>
                </div>
            </div>
        </form>
    );
};

export default PatientInfoChangeFormPage;
