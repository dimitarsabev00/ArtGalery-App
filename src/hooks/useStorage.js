import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { storage, db } from "../configs/firebase";
import { useState, useEffect } from "react";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const collectionRef = collection(db, "images");

    const uploadTask = uploadBytesResumable(ref(storage, file.name), file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(percentage);
      },
      (error) => {
        setError(error);
      },
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        const createdAt = serverTimestamp();
        await addDoc(collectionRef, { url: downloadURL, createdAt });
        setUrl(downloadURL);
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
