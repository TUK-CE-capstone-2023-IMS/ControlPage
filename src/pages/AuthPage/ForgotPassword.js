import React, { useState } from 'react';

const ForgotPasswordPage = () => {

    const [email, setEmail] = useState('');
    const [foundUsername, setFoundUsername] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();

        const foundUsername = findUsernameByEmail(email);

        if (foundUsername) {
            setFoundUsername(foundUsername);
        } else {
            setFoundUsername('해당 이메일과 연결된 아이디를 찾을 수 없습니다.');
        }
    };

    // 더미 데이터를 사용하여 이메일로 아이디 찾기를 시뮬레이션하는 함수
    const findUsernameByEmail = (email) => {
        // 여기에서 실제로는 서버로 요청을 보내서 이메일과 연결된 아이디를 검색해야 합니다.
        // 이 예제에서는 단순히 하드코딩된 더미 데이터를 사용합니다.
        const users = [
            { id: 1, email: 'user1@example.com', username: 'user1' },
            { id: 2, email: 'user2@example.com', username: 'user2' },
            { id: 3, email: 'user3@example.com', username: 'user3' },
        ];

        const user = users.find((user) => user.email === email);
        return user ? user.username : null;
    };

    return (
        <div>
            <h2>비밀번호 재설정을 위한 아이디 찾기</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">등록한 이메일:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">아이디 찾기</button>
            </form>
            {foundUsername && <p>{foundUsername}</p>}
        </div>
    );
};

export default ForgotPasswordPage;
