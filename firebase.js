import firebase from "firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyC5uKNO9PUtTYkgAv4dnSipcVSXfJ9CxDc",
//   authDomain: "amzn-2.firebaseapp.com",
//   projectId: "amzn-2",
//   storageBucket: "amzn-2.appspot.com",
//   messagingSenderId: "110974081826",
//   appId: "1:110974081826:web:a8ced9ca8f01ac7d77637b",
// };

const firebaseConfig = {
  apiKey: "AIzaSyBjkJaxoGL3atcJNvRksE0l7AQndUKRzp8",
  authDomain: "amaclone-2651f.firebaseapp.com",
  projectId: "amaclone-2651f",
  storageBucket: "amaclone-2651f.appspot.com",
  messagingSenderId: "922086286339",
  appId: "1:922086286339:web:14b4f051eb8a7f6a991a36"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
