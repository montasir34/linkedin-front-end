// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfOFWQFFC4LPNPW9v5Aeuq8k_ZliSKzGs",
  authDomain: "store-image-1a1f8.firebaseapp.com",
  projectId: "store-image-1a1f8",
  storageBucket: "store-image-1a1f8.appspot.com",
  messagingSenderId: "1052189811835",
  appId: "1:1052189811835:web:c3d93b15a1511dc4302ede"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)


