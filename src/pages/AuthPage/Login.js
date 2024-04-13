import React, {useState} from 'react';
import './Login.css';
import axios from "axios";
import  {Link} from 'react-router-dom';


const LoginPage = () => {

    const [managerId, setManagerId] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log('managerId:', managerId);
        console.log('Password:', password);

    };

    const fun = async (event) => {
        try {
            const response = await axios.post('http://localhost:8080/manager/login', {
                managerId: managerId,
                password: password
            });

            if (response && response.data) { // 응답이 존재하고 데이터가 있는지 확인
                console.log('로그인 요청 성공:', response.data);
                // 로그인 성공 시 처리
                setManagerId('');
                setPassword('');
            } else {
                console.error('서버 응답에 데이터가 없습니다.');
                // 응답이 비어있는 경우 처리
            }
        } catch (error) {
            console.error('로그인 요청 실패:', error.response ? error.response.data : error.message);
            // 오류 처리 (응답이 있는 경우 응답 데이터를, 없는 경우 오류 메시지를 출력)
        }
    };


    return (
        <div class="login_page">
            <div class="box">
                <p class="title">레이더 관리자 서비스 시스템</p>
                <form onSubmit={handleSubmit}>
                    <div>
                        <div class="id">
                            <label htmlFor="managerId">아이디</label>
                        </div>
                        <div class="idbox">
                            <input
                                type="text"
                                id="managerId"
                                value={managerId}
                                onChange={(e) => setManagerId(e.target.value)}
                                required/>
                        </div>
                    </div>
                    <div>
                        <div class="password">
                            <label htmlFor="password">비밀번호</label>
                        </div>
                        <div class="passwordbox">
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required/>
                        </div>
                    </div>
                    <div className="forgot">
                        <p>아이디 또는 비밀번호를 잃어버리셨나요?</p>
                    </div>
                    <div className="total_button">
                        <div className="login_button">
                            <button type="submit" onClick={fun}>로그인</button>
                        </div>
                        <div className="signin_button">
                            <Link to="/signup"><button>회원가입</button></Link>
                        </div>
                        <div cancel>
                            <Link to="/"><button>취소</button></Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default LoginPage;
