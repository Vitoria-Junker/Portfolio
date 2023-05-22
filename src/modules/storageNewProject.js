import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "@/lib/firebase";

export const uploadImage = (selectedImage) => {
  if (!selectedImage) return Promise.resolve(null);

  const storageRef = ref(storage, `images/${selectedImage.name}`);
  const uploadTask = uploadBytesResumable(storageRef, selectedImage);

  return new Promise((resolve, reject) => {
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.error(error);
        reject(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          resolve(downloadURL);
        });
      }
    );
  });
};