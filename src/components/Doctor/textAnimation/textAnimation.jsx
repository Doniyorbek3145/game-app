import React, { useEffect, useState } from 'react';
import './textAnimation.scss';

function TextAnimation({ words }) {

    const textLength = Number(words.length);

    const firstWords = words.slice(0, textLength / 2);
    const lastWords = words.slice(textLength / 2)

    const [showWord, setShowWord] = useState(true);

    useEffect(()=>{
        setTimeout(() => {
            setShowWord(false)
        }, 4500);
    }, [])


    return (
        <section className="text-animation">
            <div className="animated-objects">

                <div className={showWord? 'first show' : 'first'}>{firstWords}</div>

                <div className={showWord? 'last' : 'last show'}>{lastWords}</div>

            </div>

        </section >
    )
}

export default TextAnimation
