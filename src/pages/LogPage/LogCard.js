import React from "react";

const LogCard = ({ logInfo })=>{
    const logClass = `log-card ${logInfo.status === 'emergency' ? 'emergency' : 'normal'}`;
    return(
        <div className={logClass}>
            <div className="log-info">
                <p className="log-contents">{logInfo.content}</p>
                <p className="log-time">{logInfo.datetime}</p>
            </div>
        </div>
    )
}
export default LogCard;
