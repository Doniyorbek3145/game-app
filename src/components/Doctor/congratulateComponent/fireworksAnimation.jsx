import React, { useEffect, useState } from 'react';
import ReactConfetti from 'react-confetti';

function FireworkAnimation() {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    })

    const detectSize = () => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        })
    }



    useEffect(() => {
        window.addEventListener('resize', detectSize)
        return ()=>{
            window.removeEventListener('resize', detectSize)
        }
    },[windowSize])

    return (
        <div className='firework-animation'>
            <ReactConfetti
                width={windowSize.width}
                height={windowSize.height}
                tweenDuration={1000}
            />
        </div>
    )
}

export default FireworkAnimation
