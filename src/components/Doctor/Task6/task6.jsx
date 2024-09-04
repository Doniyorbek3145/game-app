import React, { useEffect } from 'react'
import DoctorComponent from '../DoctorComponent';
import speech from './assets/task3-audio.aac';


function DoctorTaskSix() {

    const NextButton = '/doctor/task4';
    const BackgroundImage = '../assets/doctor/background-3blur.png';
    const speechAudio = new Audio(speech);
    const animationTime = 10000;

    const variants = {
        fadeIn: {
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 1, y: 0 },
            transition: { duration: 0.5, type: 'inertia' },
        },
        slideIn: {
            initial: { opacity: 0, x: 300 },
            animate: { opacity: 1, x: 0 },
            exit: { opacity: 0, x: 200 },
            transition: {},
        },
    };

    const words = `
    Let's study medicine with you through    the game!
    What type of doctor is this?
    `

    useEffect(() => {
        speechAudio.volume = 1;

        setTimeout(() => {
            speechAudio.play(); 
        }, 3500);

        return () => {
            speechAudio.pause();
            speechAudio.currentTime = 0;
        };
    }, [])


    return (
        <DoctorComponent
            BackgroundImage={BackgroundImage}
            NextButton={NextButton}
            FadeIn={variants.fadeIn}
            SlideIn={variants.slideIn}
            words={words}
            animationTime={animationTime}
        >

        </DoctorComponent>
    )
}

export default DoctorTaskSix
