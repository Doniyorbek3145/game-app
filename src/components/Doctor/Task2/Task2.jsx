import React, { useEffect } from 'react';
import './Task2.scss';
import DoctorComponent from '../DoctorComponent';
import Lottie from 'lottie-react';
import animationTwo from './animations/clock.json';
import animationOne from './animations/doctor-nurse.json';
import speech from './animations/task2-audio.aac';

function DoctorTaskTwo() {
    const NextButton = '/doctor/task3';

    const BackgroundImage = "../assets/doctor/background-6.jpg";

    const variants = {
        fadeIn: {
            initial: { opacity: 0, x: 0 },
            animate: { opacity: 1, x: 0 },
            exit: { opacity: 1, x: 0 },
            transition: { duration: 0.5, type: 'spring' },
        },
        slideIn: {
            initial: { opacity: 0, y: 300 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: 200 },
            transition: { delay: 1.1, },
        },
    };

    const words = `
    Doctors take care of people's health. There are many kind of doctors, such as dentists, pediatricians, and others.
    `

    const animationTime = 12000;

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
            <div className="doctor-task-two">
                <div className='animation-one'>
                    <Lottie
                        animationData={animationOne}
                        loop={true}
                        autoplay={true}
                    />
                </div>
                <div className='animation-two'>
                    <Lottie
                        animationData={animationTwo}
                        loop={true}
                        autoplay={true}
                    />
                </div>
            </div>
        </DoctorComponent>

    )
}

export default DoctorTaskTwo;