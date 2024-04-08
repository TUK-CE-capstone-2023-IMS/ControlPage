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
        <div className="calendar">
            <div className="controls">
                <button onClick={handlePrevMonth}>이전 달</button>
                <div className="month">{`${currentYear}년 ${currentMonth + 1}월`}</div>
                <button onClick={handleNextMonth}>다음 달</button>
            </div>
            <div className="days">
                {['일', '월', '화', '수', '목', '금', '토'].map(day => (
                    <div key={day} className="day">{day}</div>
                ))}
                {emptyCellsStart.map((cell, index) => (
                    <div key={`empty-start-${index}`} className="empty-cell"></div>
                ))}
                {daysInMonth.map(day => (
                    <div key={day} className={`day ${new Date(currentYear, currentMonth, day).toDateString() === new Date().toDateString() ? 'today' : ''}`}>{day}</div>
                ))}
                {emptyCellsEnd.map((cell, index) => (
                    <div key={`empty-end-${index}`} className="empty-cell"></div>
                ))}
            </div>
        </div>
    );
};

export default Calendar;
