import React from 'react';

import { motion } from 'framer-motion';
import './Modal.css';

const Modal = props => {
    const { selectedImage, setSelectedImage } = props;

    const closeModalHandler = event => {
        if (event.target.classList.contains("backdrop")) {
            setSelectedImage(null);
        }

    }

    return (
        <motion.div
            className="backdrop"
            onClick={closeModalHandler}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <motion.img
                src={selectedImage}
                alt="UserImage"
                className="backdrop__image"
                initial={{ y: "-100vh" }}
                animate={{ y: "0" }}
            />
        </motion.div>
    )
};

export default Modal;