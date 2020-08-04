import React, { useState } from 'react';

import ProgressBar from './ProgressBar';
import './UploadImage.css';


const UploadImage = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const fileTypes = ['image/png', 'image/jpeg'];

    const addFileHandler = event => {
        let selectedFile = event.target.files[0];
         
        if(selectedFile && fileTypes.includes(selectedFile.type)){
            setFile(selectedFile);
            setError('');
        } else {
           setFile(null);
           setError('Please select a image file (png or jpeg)')
        }
    }


    return (
        <div className="uploadForm">
            <form className="form">
                <label className="form__label">
                    <input type="file"
                        accept="image/png, image/jpeg"
                        onChange={addFileHandler}
                        className="form__input"
                    />
                    <span>+</span>
                </label>
            </form>
            {error && <div className="error">{error}</div>}
            {file && <ProgressBar file={file} setFile={setFile} />}
        </div>
    )
};

export default UploadImage;
