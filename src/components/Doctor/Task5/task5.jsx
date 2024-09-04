import React, { useState } from 'react';
import './task5.scss';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import FireworkAnimation from '../congratulateComponent/fireworksAnimation';

function DoctorTaskFive() {
    const images = [
        { id: 0, src: '../assets/doctor/task5/blood-bag.png', name: 'blood bag' },
        { id: 1, src: '../assets/doctor/task5/braces.png', name: 'braces' },
        { id: 2, src: '../assets/doctor/task5/gloves.png', name: 'Rubber gloves' },
        { id: 3, src: '../assets/doctor/task5/ambulance.png', name: 'ambulance' },
        { id: 4, src: '../assets/doctor/task5/first-aid-kit.png', name: 'first aid kit' },
        { id: 5, src: '../assets/doctor/task5/microscope.png', name: 'microscope' },
        { id: 6, src: '../assets/doctor/task5/syringe.png', name: 'syringe' },
        { id: 7, src: '../assets/doctor/task5/stethoscope.png', name: 'stethoscope' },
        { id: 8, src: '../assets/doctor/task5/thermometer.png', name: 'thermometer' },
        { id: 9, src: '../assets/doctor/task5/bandage.png', name: 'bandage' },
        { id: 10, src: '../assets/doctor/task5/mask.png', name: 'surgical mask' },
        { id: 11, src: '../assets/doctor/task5/dental-pick.png', name: 'dental pick' },
    ];

    const [foundImages, setFoundImages] = useState([]);
    const [wrongImage, setWrongImage] = useState(null);
    const [targetImage, setTargetImage] = useState(generateRandomImage());

    function generateRandomImage() {
        const remainingImages = images.filter(image => !foundImages.includes(image.id));
        return remainingImages[Math.floor(Math.random() * remainingImages.length)];
    }

    function handleImageClick(selectedImage) {
        if (selectedImage.name === targetImage.name) {
            // Update foundImages only if the image is not already found
            setFoundImages(prevFoundImages => {
                if (!prevFoundImages.includes(selectedImage.id)) {
                    return [...prevFoundImages, selectedImage.id];
                }
                return prevFoundImages;
            });
            // Generate a new target image
            setTargetImage(generateRandomImage());
        } else {
            // Set the wrong image state and reset it after 1 second
            setWrongImage(selectedImage.id);
            setTimeout(() => {
                setWrongImage(null);
            }, 1000);
        }
    }

    return (
        <div className='doctorTaskFive'>
            <motion.h2

            >
                {
                    foundImages.length === 12 ?
                        'Congratulations'
                        :
                        `Find the ${targetImage.name}!`
                }
            </motion.h2>

            <div className="images">
                {images.map((image) => (
                    <motion.div
                        key={image.id}
                        onClick={() => handleImageClick(image)}
                        style={{
                            cursor: foundImages.includes(image.id) ? 'default' : 'pointer',
                        }}
                        whileHover={{ scale: foundImages.includes(image.id) || wrongImage === image.id ? 1 : 1.2 }}
                        whileTap={{ scale: foundImages.includes(image.id) || wrongImage === image.id ? 1 : 0.8 }}
                    >
                        <motion.img
                            src={
                                foundImages.includes(image.id)
                                    ? '../assets/doctor/checked.svg'
                                    : wrongImage === image.id
                                        ? '../assets/doctor/error-icon.svg'
                                        : image.src
                            }
                            alt={image.name}
                            animate={
                                foundImages.includes(image.id) || wrongImage === image.id
                                    ? { rotateY: [0, 360] }
                                    : {}
                            }
                            transition={{ duration: 0.6 }}
                        />
                    </motion.div>
                ))}
            </div>

            {
                foundImages.length === 12 ?

                    <motion.button className="button">
                        <Link to={'/score-board'}>
                            Continue
                        </Link>
                    </motion.button>
                    :
                    null
            }

            {
                foundImages.length===12?
                <FireworkAnimation/>
                :
                null
            }
        </div>
    );
}

export default DoctorTaskFive;
