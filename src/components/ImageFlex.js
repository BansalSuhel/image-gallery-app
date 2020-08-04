import React from 'react';

import useFireStore from '../hooks/useFireStore';
import { motion } from 'framer-motion';
import './ImageFlex.css';

const ImageFlex = props => {

    const { images } = useFireStore('images');
    return (
        <div className="image-flex">
            {images && images.map(image => (
                <motion.div
                    key={image.id}
                    className="image-flex__div"
                    onClick={() => props.onModalHandler(image.url)}
                    whileHover={{ opacity: 1 }}
                    layout
                >
                    <motion.img
                        src={image.url}
                        alt="UserImage"
                        className="image-flex__image" 
                         initial={{opacity:0}}
                         animate={{opacity:1}}  
                         transition={{delay: 1}} 
                        />
                </motion.div>
            ))}
        </div>
    )
};

export default ImageFlex;