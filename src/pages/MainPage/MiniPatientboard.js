import React from 'react';
import './MiniPatientboard.css';

const MiniPatientBoard = () => {
    return (
        <div className="minipatientboardpage-layout">
            <div className="minipatientboard_page">
                <div className="minipatientboard_box">
                    <div className= "minipatientboard_text">
                        <p className="minipatientboard_text1">환자목록</p>
                        <div className="minipatientboard_text2">
                            <a href="#">송채연님</a>
                        </div>
                        <div className="minipatientboard_text3">
                            <a href="#">김나현님</a>
                        </div>
                        <div className="minipatientboard_text4">
                            <a href="#">황시훈님</a>
                        </div>
                        <div className="minipatientboard_text5">
                            <a href="#">권구민님</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MiniPatientBoard;
