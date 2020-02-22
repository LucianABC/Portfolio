import React from 'react';
import '../Animations/Animations.scss';
import './PhotoFrame.scss';


const PhotoFrame = ({img, rotation}) => {
    return(
        <div className="photo-container flip-in-ver-left " style={{transform: `rotate(${rotation}deg)`}}>
            <div className="polaroid-frame"></div>
            <div className="polaroid-photo" style={{backgroundImage:`url(${img})`}}></div>    
        </div>
    );
}

export default PhotoFrame;