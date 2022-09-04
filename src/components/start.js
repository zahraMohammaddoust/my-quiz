import React from "react";

const Start = ({onQuizStart}) => {
    return(
    <div className="card">
        <div className="card-content">
            <div className="content">
                <p id="textS">Start the quiz</p>
                <p id="textG">Good luck!</p>
                <button  onClick={onQuizStart}>Start</button>
            </div>
        </div>
    </div>
    )
}

export default Start