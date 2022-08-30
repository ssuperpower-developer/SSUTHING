import { initializeApp } from "firebase/app";
import { getFirestore, initializeFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAn9dz83AsjyQcmzGj5RCBVChHIwxJpQas",
  authDomain: "gogo-11f53.firebaseapp.com",
  projectId: "gogo-11f53",
  storageBucket: "gogo-11f53.appspot.com",
  messagingSenderId: "298565702293",
  appId: "1:298565702293:web:6c5ca44d27c805122d819c",
};
// firebase.firestore().settings({ experimentalForceLongPolling: true });
// export const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);

const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

export { db };
