import React, { useEffect } from 'react';
import './task1.scss';
import DoctorComponent from '../DoctorComponent';
import Lottie from 'lottie-react';
import animationFour from './assets/Animation-8.json';
import animationOne from './assets/doctor-disabled.json';
import animationThree from './assets/clock.json';
import speech from './assets/task1-audio.aac';


function DoctorTaskOne() {
    const NextButton = '/doctor/task2';
    const BackgroundImage = '../assets/doctor/background-5.jpg';
    const animationTime = 9000;

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
    Hi! My name is Dr. Jakhongir, do you want to be a doctor? Let's test your knowledge!
    `

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
            <div className="doctor-task-one">
                <div className='animation-one'>
                    <Lottie
                        animationData={animationFour}
                        loop={true}
                        autoplay={true}
                    />
                </div>
                <div className='animation-two'>
                    <Lottie
                        animationData={animationOne}
                        loop={true}
                        autoplay={true}
                    />
                </div>
                <div className='animation-three'>
                    <Lottie
                        animationData={animationThree}
                        loop={true}
                        autoplay={true}
                    />
                </div>
            </div>
        </DoctorComponent>
    )
}

export default DoctorTaskOne;