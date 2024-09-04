import React from 'react';
import './Button.scss'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '@fortawesome/fontawesome-free/css/all.min.css';

function ButtonComponent({ urlPath }) {

    return (

        <motion.div className='button-component'
            initial={{ x: -100, opacity: 0, scale: 1 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 2, ease: "easeOut" }}
            exit={{ delay: 0, duration: 0 }}
        >
            <section class="content">
                <div>
                    <Link to={urlPath} class="btn btn--action"><span>Continue</span></Link>
                </div>
            </section>
        </motion.div>

    )
}

export default ButtonComponent
