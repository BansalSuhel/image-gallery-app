import React, { useState } from 'react';

import Title from './components/Title';
import UploadImage from './components/UploadImage';
import ImageFlex from './components/ImageFlex';
import Modal from './components/Modal';
import './App.css';

const App = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="App">
       <Title />
       <UploadImage />
       <ImageFlex onModalHandler={setSelectedImage} />
       {selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage} />}
    </div>
  )
}
export default App;
