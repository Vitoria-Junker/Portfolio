import firebase from 'firebase/app';
import { getStorage, ref } from 'firebase/storage';
import { initializeApp } from 'firebase/app';

const firebaseConfig =    { 
apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
storageBucket: 'gs://portf0lio-2b546.appspot.com',
messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
appId: process.env.NEXT_PUBLIC_FIREBASE_API_ID,
}

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);
const storageRef = ref(storage, 'portf0lio-2b546.appspot.com');

export { app, storage, storageRef, firebase as default };