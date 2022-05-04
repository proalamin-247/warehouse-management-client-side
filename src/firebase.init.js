import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyA0oMAau484dcQ40tSDBHCPAlJD_OrVWtA",
    authDomain: "warehouse-management-a50b1.firebaseapp.com",
    projectId: "warehouse-management-a50b1",
    storageBucket: "warehouse-management-a50b1.appspot.com",
    messagingSenderId: "443112174795",
    appId: "1:443112174795:web:22b3aa8278d3538736574e"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;