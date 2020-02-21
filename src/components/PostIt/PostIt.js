import React from 'react';
import './PostIt.scss';

const PostIt =(props)=>{
    return(
        <div className="post-it">
                {props.children}
        </div>
    );
}

export default PostIt;