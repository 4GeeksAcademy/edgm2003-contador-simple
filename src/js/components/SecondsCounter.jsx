import React from "react";
import "./Styles.css";

const SecondsCounter = ({ seconds }) => {
    const digitos = seconds.toString().padStart(6, "0").split("");

    return (
        <div className="counter-container">
            <div className="counter-box clock-box">⏱</div>

            {digitos.map((digito, index) => (
                <div key={index} className="counter-box">
                    {digito}
                </div>
            ))}
        </div>
    );
};

export default SecondsCounter;