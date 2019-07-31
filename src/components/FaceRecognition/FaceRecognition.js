import React from 'react';
import "./FaceRecognition.css"

const FaceRecognition = ({ imgUrl, box }) => {
    return (
        <div className="center ma mt4">
            <div className="absolute">
                <img id="inputimage" src={imgUrl} alt="" width="500" height="auto"/>
                <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
            </div>
        </div>
    );
}

export default FaceRecognition;