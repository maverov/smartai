import React from 'react';
import Tilt from 'react-tilt';
import brain from "./brain1.png";
import "./Logo.css";

const Logo = () => {
    return (
        <div className="ma1 mt0" style={{paddingLeft: "2rem"}}>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa3"><img style={{paddingTop: "5px"}} src={brain} alt="SmartAI Brain Logo © Maverov"/></div>
            </Tilt>
        </div>
    )
}

export default Logo;