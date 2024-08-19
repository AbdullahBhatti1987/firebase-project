import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-analytics.js";
import { getAuth,
            createUserWithEmailAndPassword,
            signInWithEmailAndPassword, 
            onAuthStateChanged, 
            updatePassword, 
            signOut 
            } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { getFirestore,
            doc,
            setDoc,
            } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

import { getStorage,
            ref,
            uploadBytes,
            getDownloadURL,

            } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyCiyyf2PnDIn5c1wDRYvuWrXSbEdW0v1t8",
    authDomain: "minhaj-web.firebaseapp.com",
    projectId: "minhaj-web",
    storageBucket: "minhaj-web.appspot.com",
    messagingSenderId: "597140973488",
    appId: "1:597140973488:web:a433af32707d1550eb5875",
    measurementId: "G-9BD90D2TQR"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const storage = getStorage(app);




  export {auth, 
        createUserWithEmailAndPassword, 
        signInWithEmailAndPassword,
        onAuthStateChanged, updatePassword, signOut,
        db,
        doc,
        setDoc,
        storage,
        ref,
        uploadBytes,
        getDownloadURL, 
    }