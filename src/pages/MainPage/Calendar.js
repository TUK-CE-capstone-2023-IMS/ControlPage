import React, { useState } from 'react';
import './Calendar.css';

const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    const handlePrevMonth = () => {
        setCurrentDate(prevDate => {
            return new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1);
        });
    };

    const handleNextMonth = () => {
        setCurrentDate(prevDate => {
            return new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1);
        });
    };

    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);

    const daysInMonth = [];
    for (let i = firstDayOfMonth.getDate(); i <= lastDayOfMonth.getDate(); i++) {
        daysInMonth.push(i);
    }

    const startIndex = firstDayOfMonth.getDay();
    const endIndex = lastDayOfMonth.getDay();

    const emptyCellsStart = Array(startIndex).fill(null);
    const emptyCellsEnd = Array(6 - endIndex).fill(null);

    return (
        <div className="calendar_page">
            <div className="cal_controls">
                <div className="cal_last_month_button">
                    <button onClick={handlePrevMonth}>이전 달</button>
                </div>
                <div className="cal_month">
                    {`${currentYear}년 ${currentMonth + 1}월`}
                </div>
                <div className="cal_next_month_button">
                    <button onClick={handleNextMonth}>다음 달</button>
                </div>
            </div>

            <div className="cal_days">
                {['일', '월', '화', '수', '목', '금', '토'].map(day => (
                    <div key={day} className="cal_dw">{day}</div>
                ))}
                {emptyCellsStart.map((cell, index) => (
                    <div key={`empty-start-${index}`} className="cal_empty-cell"></div>
                ))}
                {daysInMonth.map(day => (
                    <div key={day} className={`cal_day ${new Date(currentYear, currentMonth, day).toDateString() === new Date().toDateString() ? 'cal_today' : ''}`}>{day}</div>
                ))}
                {emptyCellsEnd.map((cell, index) => (
                    <div key={`empty-end-${index}`} className="cal_empty-cell"></div>
                ))}
            </div>
        </div>
    );
};

export default Calendar;
