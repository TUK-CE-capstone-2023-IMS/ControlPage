import React, {useEffect, useState} from 'react';
import './MiniPatientboard.css';
import axios from "axios";
import {useNavigate} from "react-router-dom";

const MiniPatientBoard = () => {

    const [patients, setPatients] = useState([]);
    const navigate = useNavigate()
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
    const handledInfoClick = async (patientid) => {
        navigate('/patientInfo', {state: {patientid: patientid}});
    };
    return (
        <div className="minipatientboard_box">
            <div className="minipatientboard_title">환자목록</div>
            <div className="minipatientboard_list">
            {patients.map(patient => (
                <div className="minidashboard_name" key={patient.patientid}
                     onClick={(event) => handledInfoClick(patient.patientid)}>
                    {patient.name}
                </div>
            ))}
            </div>
        </div>
    );
};

export default MiniPatientBoard;
