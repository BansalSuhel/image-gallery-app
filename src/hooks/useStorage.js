import  { useState,useEffect } from 'react';

import {projectStorage, projectFireStore, timeStamp} from '../firebase/config';

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

useEffect(() => {
    const storageRef = projectStorage.ref(file.name);

    const fireStoreRef = projectFireStore.collection('images')


    storageRef.put(file).on('state_changed', (snap) => {
         let progress = (snap.bytesTransferred / snap.totalBytes) * 100;
         setProgress(progress);
    },(err) => {
        setError(err);
    }, async () => {
        const url = await storageRef.getDownloadURL();
        setUrl(url);
        const createdAtTime = timeStamp();
        await fireStoreRef.add({url,createdAtTime});
    });

},[file]);
   
    return {progress, error, url};
}

export default useStorage;