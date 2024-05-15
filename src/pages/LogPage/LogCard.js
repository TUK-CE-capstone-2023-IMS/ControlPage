import React from "react";

// 이미지 경로를 프로젝트 루트 디렉토리 기준으로 올바르게 설정합니다.
const getImageSrc = (content) => {
    switch(content) {
        case 'SITTING':
            return require('../../image/status_sitting.png');
        case 'STANDING':
            return require('../../image/status_standing.png');
        case 'FALL':
            return require('../../image/status_fall.png');
        case 'LYING':
            return require('../../image/status_lay_down.png');
        default:
            return require('../../image/status_standing.png'); // 기본 이미지 경로
    }
};
const setState = (state) =>{
    switch(state) {
        case 'SITTING':
            return "앉음";
        case 'STANDING':
            return "서 있음";
        case 'FALL':
            return "낙상발생"
        case 'LYING':
            return "누워있음";
        default:
            return "서 있음" // 기본 이미지 경로
    }
}
const LogCard = ({ logInfo }) => {
    const logClass = `log-card ${logInfo.type === 'emergency' ? 'emergency' : 'normal'}`;

    /*return (
        <div className={logClass}>
            <div className="log-info">
                <img className="log-img" src={getImageSrc(logInfo.content)} alt={logInfo.content} />
                <div className="log-info-box">
                    <p className="log-contents">{setState(logInfo.content)}</p>
                    <p className="log-time">{logInfo.datetime}</p>
                </div>
            </div>
        </div>
    );*/
    return(
            <div className="log-card-layout-contents">
                <div className="log-card-content-date">{logInfo.datetime}</div>
                <div className="log-card-content-type">{logInfo.type}</div>
                <div className="log-card-content-status">{logInfo.content}</div>
            </div>
    )
};

export default LogCard;
