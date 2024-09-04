import Lottie from 'lottie-react';
import React from 'react';
import animationData from './congratulations-animation.json';
import './congratulate.scss'

function Congratulate() {
    return (
        <div>
            <Lottie 
                animationData={animationData}
                loop={true}
                autoplay={true}
            />
        </div>
    )
}

export default Congratulate
