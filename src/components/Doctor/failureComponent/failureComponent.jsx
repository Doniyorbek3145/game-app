import Lottie from 'lottie-react';
import React from 'react';
import animationData from './failure-animation.json';

function Failure() {
    return (
        <div>
            <Lottie 
                animationData={animationData}
                loop={true}
                autoplay={true}
                style={{width: '500px'}}
            />
        </div>
    )
}

export default Failure