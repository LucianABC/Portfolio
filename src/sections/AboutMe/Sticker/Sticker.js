import React from 'react';
import './Sticker.scss';
const Sticker=({img, left, top, rotation})=>{
    return(
        <img className="sticker" src={img}
                                style={{left:`${left}`,
                                top:`${top}`,
                                transform:`rotate(${rotation})`}}/>
    );
}

export default Sticker