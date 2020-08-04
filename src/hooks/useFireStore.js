import  { useEffect,useState } from 'react';

import { projectFireStore } from '../firebase/config';


const useFireStore = (collection) => {
    const [images, setImages] = useState([]);
  
    useEffect(() => {
    const unsub = projectFireStore.collection(collection)
    .orderBy('createdAtTime', 'desc')
       .onSnapshot((snap) => {
            let documents = [];
            snap.forEach((doc) => {
                documents.push({...doc.data(), id: doc.id});
            });
            setImages(documents);
            
       });

       return () => unsub();
      
    },[collection]);

    return {images};
};

export default useFireStore;