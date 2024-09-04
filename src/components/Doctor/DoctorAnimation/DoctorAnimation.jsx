import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './DoctorAnimation.scss';

function DoctorAnimation({ animationVariant, animationTime }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isAnimationActive, setIsAnimationActive] = useState(false);

    const images = [
        "../assets/doctor.png",
        "../assets/doctor-speaking.png",
        "../assets/doctor-speaking-2.png",
    ];

    useEffect(() => {
        let interval;
        if (isAnimationActive) {
            interval = setInterval(() => {
                setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
            }, 400);
        }

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isAnimationActive, images.length]);

    useEffect(() => {
        const startTimeout = setTimeout(() => {
            setIsAnimationActive(true);
        }, 2000);

        const stopTimeout = setTimeout(() => {
            setIsAnimationActive(false);
            setCurrentImageIndex(0);
        }, animationTime);

        return () => {
            clearTimeout(startTimeout);
            clearTimeout(stopTimeout);
        };
    }, []);

    

    return (
        <motion.div
            className="doctor-animation-container"
            variants={animationVariant}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <motion.img
                src={images[currentImageIndex]}
                alt="Doctor"
                className="doctor-animation-image"
                initial={{ opacity: 1 }}
                animate={{ opacity: isAnimationActive ? 1 : 1 }}
                transition={{ duration: 0.1, ease: "easeInOut" }}
            />
        </motion.div>
    );
}

export default DoctorAnimation;

