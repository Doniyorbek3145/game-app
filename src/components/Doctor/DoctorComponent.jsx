import React, { useEffect, useState } from 'react';
import "./Doctor.scss";
import { motion } from "framer-motion";
import ButtonComponent from '../LittleComponents/Button/Button';
import DoctorAnimation from './DoctorAnimation/DoctorAnimation';
import LoaderComponent from '../Loader/Loader';
import TextAnimation from './textAnimation/textAnimation';




function DoctorComponent({ BackgroundImage, NextButton, FadeIn, SlideIn, words, children, animationTime }) {

    const [loaderOn, setLoaderOn] = useState(true)

    useEffect(() => { 
        setTimeout(() => {
            setLoaderOn(false)
        }, 2000);
    }, [])

    return (
        <>
            {
                loaderOn ? <LoaderComponent /> :

                    <motion.div
                        className='doctorComponent'>
                        <motion.div
                            className="background-image"
                            variants={FadeIn}
                            initial="initial"
                            animate="animate"
                            exit="exit"

                        >
                            <img src={BackgroundImage} alt="Background" />
                        </motion.div>
                        <div className="doctor-pic">
                            <DoctorAnimation animationVariant={SlideIn} animationTime={animationTime} />
                        </div>
                        <div className="cloud">
                            <div className="pic">
                                <div>
                                    <motion.img
                                        src="../assets/big-cloud.svg"
                                        alt="cloud"
                                        initial={{ opacity: 0, y: 0 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, x: 0 }}
                                        transition={{ duration: 1, delay: 1.8 }}
                                    />
                                </div>
                                <div>
                                    <motion.img
                                        src="../assets/smaller-cloud.svg"
                                        alt="cloud"
                                        initial={{ opacity: 0, y: 0 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, x: 0 }}
                                        transition={{ duration: 1, delay: 1.4 }}
                                    />
                                </div>
                                <div>
                                    <motion.img
                                        src="../assets/smallest-cloud.svg"
                                        alt="cloud"
                                        initial={{ opacity: 0, y: 0 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, x: 0 }}
                                        transition={{ duration: 1, delay: 1 }}
                                    />
                                </div>
                            </div>
                            <motion.div className="text"
                                initial={{ opacity: 0, y: 0 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 0 }}
                                transition={{ duration: 1, delay: 2 }}
                            >
                                <TextAnimation words={words}/>
                            </motion.div>
                        </div>
                        <div className='background-animation'>
                            {
                                children
                            }
                        </div>
                        <ButtonComponent urlPath={NextButton} />
                    </motion.div>
            }
        </>
    )

}

export default DoctorComponent;
