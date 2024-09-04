import React from 'react';
import './MainMenu.scss';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'

function MainMenu() {
    const background = './assets/background-main-menu.png';

    return (
        <motion.div
            className='main-menu'
            initial={{ opacity: 1, y: "100vh" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, type: 'spring' }}
            exit={{ opacity: 1, y: "-100vh" }}
        >
            <div className="background">
                <img src={background} alt="background" />
            </div>
            <Link to="/choose-character" className="btn-main-menu">
                PLAY
            </Link>
        </motion.div>
    )
}

export default MainMenu
