import React from 'react';
import './PostIt.scss';

const PostIt =({children, deg, img})=>{
    return(
        <div className="post-it" 
            style={
                    {transform: `rotate(${deg}deg)`,
                    backgroundImage: `url(${img})`}
                }>
            <p className="post-it-text">
                {children}
            </p>
        </div>
    );
}

export default PostIt;