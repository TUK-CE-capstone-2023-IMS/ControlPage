import React, { useEffect, useState } from 'react';
import './MiniDashboard.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {API} from "../../apis/config";

const MiniDashBoard = () => {
    const navigate = useNavigate();
    const [patients, setPatients] = useState([]);
    const managerId = localStorage.getItem('managerId');

    useEffect(() => {
        if (managerId) {
            fetchData();
        }
    }, [managerId]);

    const fetchData = async () => {
        try {
            const response = await axios.get(API.PATIENT_LOAD);

            if (response && response.data) {
                setPatients(response.data);
            } else {
                console.error('서버 응답에 데이터가 없음');
            }
        } catch (error) {
            console.error('데이터를 불러오는 중 오류 발생:', error.response ? error.response.data : error.message);
        }
    };

    const handleDetailClick = async (patient, name, address) => {
        try {
            const response = await axios.get(`${API.LOG_LOAD}=${patient}`);

            if (response && response.data) {
                navigate('/dashboard', { state: { logs: response.data, name: name, address: address } });
            } else {
                console.error('서버 응답에 데이터가 없음');
            }
        } catch (error) {
            console.error('세부 정보를 불러오는 중 오류 발생:', error.response ? error.response.data : error.message);
        }
    };

    if (!managerId) {
        return (
            <div className="minidashboard_box">
                <div className="minidashboard_title">대시보드</div>
                <div className="minidashboard_address_list">
                </div>
            </div>

        )
    }

    return (
        <div className="minidashboard_box">
            <div className="minidashboard_title">대시보드</div>
            <div className="minidashboard_address_list">
                {patients.map(patient => (
                    <div className="minidashboard_address" key={patient.patientid}
                         onClick={(event) => handleDetailClick(patient.patientid, patient.name, patient.address)}>
                        {patient.address}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MiniDashBoard;
