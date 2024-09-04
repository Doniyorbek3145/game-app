import React from 'react';
import "./Home.scss";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Home() {
    return (
        <motion.div className='HomeComponent'
            initial={{opacity:1, y: "100vh"}}
            animate={{opacity: 1, y:0}}
            transition={{duration: 0.5, type: 'spring'}}
            exit='exit'
        >
            <div className="background">
                <img src="./assets/background-main-menu.png" alt="background" />
            </div>

            <div className="main-paragraph">
                <div className="logo">
                    <span className='t1'>T</span>
                    <span className='e'>e</span>
                    <span className='x'>x</span>
                    <span className='v'>v</span>
                    <span className='e2'>e</span>
                    <span className='t2'>t</span>
                    <span className=''>&nbsp;</span>
                    <span className='c'>c</span>
                    <span className='a'>a</span>
                    <span className='r'>r</span>
                    <span className='e3'>e</span>
                    <span className='e4'>e</span>
                    <span className='r2'>r</span>
                </div>

                <ol className='characters'>
                    <li><Link to='/doctor/task1'>Doctor</Link></li>
                    <li><Link to='/doctor/task1'>Fireman</Link></li>
                    <li><Link to='/doctor/task1'>Policeman</Link></li>
                </ol>
            </div>
        </motion.div>
    )
}

export default Home
