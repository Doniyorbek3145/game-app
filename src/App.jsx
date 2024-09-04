import React, { useEffect, useState } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import Home from './components/HomePage/Home';
import DoctorTaskOne from './components/Doctor/Task1/task1';
import DoctorTaskTwo from './components/Doctor/Task2/Task2';
import { AnimatePresence } from 'framer-motion';
import DoctorTaskThree from './components/Doctor/Task3/Task3';
import DoctorTaskFour from './components/Doctor/Task4/Task4';
import DoctorTaskFive from './components/Doctor/Task5/task5';
import MainMenu from './components/MainMenu/MainMenu';
import DoctorTaskSix from './components/Doctor/Task6/task6';
import music from './assets/background-music.mp3';
import LoaderComponent from './components/Loader/Loader';
import ScoreBoard from './components/scoreBoard/ScoreBoard';


function App() {
    const location = useLocation();
    const backgroundMusic = new Audio(music);

    useEffect(()=>{
        backgroundMusic.loop = true;
        backgroundMusic.volume = 0.1;
        
        backgroundMusic.play()

        return () => {
            backgroundMusic.pause();
            backgroundMusic.currentTime = 0;
        };
    },)

    const [loaderOn, setLoaderOn] = useState(true);

    useEffect(()=>{
        setTimeout(() => {
            setLoaderOn(false)
        }, 2000);
    }, [])


    if (loaderOn) {
        return(
            <LoaderComponent/>
        )
    }


    return (
        <AnimatePresence mode='wait'>
            <Switch location={location} key={location.key}>
                <Route path='/' exact component={MainMenu}/>
                <Route path='/choose-character' component={Home}/>
                

                <Route path='/doctor/task1' component={DoctorTaskOne} exact/>
                <Route path='/doctor/task2' component={DoctorTaskTwo} exact/>
                <Route path='/doctor/task3' component={DoctorTaskSix} exact/>
                <Route path='/doctor/task4' component={DoctorTaskThree} exact/>
                <Route path='/doctor/task5' component={DoctorTaskFour} exact/>
                <Route path='/doctor/task6' component={DoctorTaskFive} exact/>
                <Route path='/score-board' component={ScoreBoard} exact/>
                
                
                
                
            </Switch>
        </AnimatePresence>
    )
}

export default App
