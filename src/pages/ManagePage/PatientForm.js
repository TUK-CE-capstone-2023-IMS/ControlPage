import React, { useState, useEffect } from 'react';
import './PatientForm.css';

const PatientFormPage = () => {
    const [patients, setPatients] = useState([]);

    const savedPatients = [
        {
            name: '조은상',
            age: '25',
            gender: '남성',
            height:'178',
            weight:'70',
            phoneNumber: '010-1234-5678',
            emergencyNumber: '010-3333-7777',
            home: '서울특별시 강남구'
        },
        {
            name: '김나현',
            age: '30',
            gender: '여성',
            height:'165',
            weight:'55',
            phoneNumber: '010-9876-5432',
            emergencyNumber: '010-5555-8888',
            home: '서울특별시 강서구'
        }
    ];

    useEffect(() => {
        setPatients(savedPatients);
    }, []);

    const handleDelete = (index) => {
        const updatedPatients = [...patients];
        updatedPatients.splice(index, 1);
        setPatients(updatedPatients);
    };

    return (
        <div>
            {patients.map((patient, index) => (
                <div className="patientformpage" key={index}>
                    <div className="total">
                        <div className="name">
                            <label>이름 : </label>
                            <span>{patient.name}</span>
                        </div>
                        <div className="age">
                            <label>나이 : </label>
                            <span>{patient.age}</span>
                        </div>
                        <div className="gender">
                            <label>성별 : </label>
                            <span>{patient.gender}</span>
                        </div>
                        <div className="height">
                            <label>키 : </label>
                            <span>{patient.height}</span>
                        </div>
                        <div className="weight">
                            <label>몸무게 : </label>
                            <span>{patient.weight}</span>
                        </div>
                        <div className="phone_num">
                            <label>전화번호 : </label>
                            <span>{patient.phoneNumber}</span>
                        </div>
                        <div className="emergency_num">
                            <label>비상 연락망 : </label>
                            <span>{patient.emergencyNumber}</span>
                        </div>
                        <div className="home">
                            <label>주소 : </label>
                            <span>{patient.home}</span>
                        </div>
                    </div>
                    <div className="signout_button">
                        <button onClick={() => handleDelete(index)}>삭제</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PatientFormPage;
