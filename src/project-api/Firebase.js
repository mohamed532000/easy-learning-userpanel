import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";
import {getAuth} from "firebase/auth";

let firebaseConfig = {
    apiKey: "AIzaSyB-fbAsPIwVntajiGhBakca94KSBF6MSBc",
    authDomain: "courses-project-4a372.firebaseapp.com",
    databaseURL: "https://courses-project-4a372-default-rtdb.firebaseio.com",
    projectId: "courses-project-4a372",
    storageBucket: "courses-project-4a372.appspot.com",
    messagingSenderId: "1018312388468",
    appId: "1:1018312388468:web:17fd8e8abfe65239884621"
};

let app = initializeApp(firebaseConfig);
export let database = getDatabase(app);
export let auth = getAuth(app);