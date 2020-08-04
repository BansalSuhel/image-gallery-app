import React, { useEffect } from 'react';

import useStorage from '../hooks/useStorage';
import { motion } from 'framer-motion';
import './ProgressBar.css';

const ProgressBar = props => {

  const { file, setFile } = props;

  const { progress, url } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile])

  return (
    <motion.div
      className="progressBar-div"
      initial={{ width: 0 }}
      animate={{ width: progress + '%' }}
    >

    </motion.div>
  )
};

export default ProgressBar;