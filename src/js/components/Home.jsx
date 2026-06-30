import React from "react";
import SecondsCounter from "./SecondsCounter.jsx";

const Home = ({ seconds }) => {
    return (
        <div className="w-100 text-center">
            <SecondsCounter seconds={seconds} />
        </div>    
    );
};

export default Home;