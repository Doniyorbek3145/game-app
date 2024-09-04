import React, { useState } from 'react';
import './Task3.scss';
import { motion } from "framer-motion";
import DoctorModal from '../modal/modal';

function DoctorTaskThree() {

    const variants = {
        fadeIn: {
            initial: { opacity: 0, x: 50 },
            animate: { opacity: 1, x: 0 },
            exit: { opacity: 1, x: 0 },
            transition: { duration: 1.2, type: 'spring' },
        },
        slideIn: {
            initial: { opacity: 0, x: 300 },
            animate: { opacity: 1, x: 0 },
            exit: { opacity: 0, x: 200 },
            transition: {},
        },
    };

    const images = [
        { id: 1, src: '../assets/doctor/policeman.svg', alt: 'Doctor', animationDuration: 0.5 },
        { id: 2, src: '../assets/doctor/doctor.svg', alt: 'policeman', animationDuration: 1 },
        { id: 3, src: '../assets/doctor/fireman.svg', alt: 'fireman', className: 'fireman', animationDuration: 1.5 },
    ];

    const [selectedImage, setSelectedImage] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleImageClick = (id) => {
        if (selectedImage === id) {
            setSelectedImage(null);
        } else {
            setSelectedImage(id);
        }
    };


    return (
        <motion.div
            className='doctorTaskThree'
        >
            <motion.div
                className="background-image"
                variants={variants.fadeIn}
                initial="initial"
                animate="animate"
                exit='exit'
            >
                
            </motion.div>
            <div className="options">
                {images.map((image) => (
                    <motion.div
                        initial={{ y: '100vw', opacity: 1 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: image.animationDuration, ease: "easeOut", }}
                        exit={{ duration: 1 }}
                        className={selectedImage === image.id ? `selected ${image?.className}` : `${image?.className}`}
                        key={image.id}
                    >
                        <motion.img
                            whileHover={{scale: [1, 1.05, 1]}}
                            transition={{duration: 1, repeat: Infinity}}
                            key={image.id}
                            src={image.src}
                            alt={image.alt}
                            onClick={() => handleImageClick(image.id)}
                        />
                        {
                            selectedImage === image.id ?
                                <img src="../assets/doctor/checked.svg" className='checked' alt="" /> :
                                <img src="../assets/doctor/checked.svg" className='d-none' alt="" />
                        }
                    </motion.div>
                ))}

            </div>

            <button className={selectedImage === null ? 'button d-none' : "button"} onClick={() => setShowModal(true)}>Continue</button>
            <DoctorModal showModal={showModal} setShowModal={setShowModal} optionId={selectedImage} />
        </motion.div>
    )
}

export default DoctorTaskThree
