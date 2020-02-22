import React from 'react';
import './Icon.scss';
import '../../Animations/Animations.scss';

const Icon =({children, img})=>{
    return(
        <div className="cellphone-item bounce-top">
            <img src={img}/>
             <p> {children} </p>
        </div>
    );
}

export default Icon;