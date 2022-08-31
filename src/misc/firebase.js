import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const config = {
  apiKey: "AIzaSyCF7j-C6Ra9fkjVUlgCluIv6RpIS93oCbc",
  authDomain: "chat-web-app-b7aee.firebaseapp.com",
  databaseURL: "https://chat-web-app-b7aee-default-rtdb.firebaseio.com",
  projectId: "chat-web-app-b7aee",
  storageBucket: "chat-web-app-b7aee.appspot.com",
  messagingSenderId: "455871164507",
  appId: "1:455871164507:web:914283182b8b9b992f0f7e"
};

const app = firebase.initializeApp(config);
export const auth = app.auth();  //auth object to interact with firebaseS
export const database = app.database();  //database object to interact with firebaseS and to collect data
export const storage = app.storage(); //storage object to interact with firebaseS and to collect databaseURL