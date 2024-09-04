import React, { useEffect } from 'react';
import DoctorComponent from '../DoctorComponent';
import speech from './assets/task5-audio.aac';

function DoctorTaskFour() {

    const NextButton = '/doctor/task6';
    const BackgroundImage = '../assets/doctor/background-4.png';

    const variants = {
        fadeIn: {
            initial: { opacity: 0, y: 0 },
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

    const words = `Now let's find out the correct                  names of the objects.`

    const animationTime = 7000;
    const speechAudio = new Audio(speech);



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

export default DoctorTaskFour
