import React from 'react';
import './modal.scss';
import { motion } from 'framer-motion';
import Congratulate from '../congratulateComponent/congratulate';
import Failure from '../failureComponent/failureComponent';
import { Link } from 'react-router-dom';

function DoctorModal({ showModal, setShowModal, optionId }) {

    const backdropVariants = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: '-100vh' },
    };

    console.log(optionId);

    const modalVariants = {
        hidden: { opacity: 0, y: "-100vh" },
        visible: { opacity: 1, y: "0" },
    };

    return (
        <motion.div
            className="backdrop"
            variants={backdropVariants}
            initial="hidden"
            animate={showModal ? "visible" : "hidden"}
            onClick={() => setShowModal(false)}
        >
            <motion.div
                className="modal"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
            >
                {
                    optionId === 2 ?
                        <div>
                            <Congratulate />
                            <div className="text">
                                Congratulations
                            </div>
                        </div>
                        :
                        <Failure />
                }

                {
                    optionId === 2 ?
                        <Link to='/doctor/task5'>Next task</Link>
                        :
                        <button onClick={() => setShowModal(false)} className='try-again'>Try Again</button>
                }

            </motion.div>
        </motion.div>
    )
}

export default DoctorModal
