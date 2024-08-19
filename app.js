import {auth, onAuthStateChanged, signOut } from "./auth/utils.js";

let userIcon = document.getElementById('userIcon')
let loginIcon = document.getElementById('loginIcon')
let logoutBtn = document.getElementById('logoutBtn')

onAuthStateChanged(auth, (user) => {
    if (user) {
      const currentUser = auth.currentUser;
      const uid = currentUser.uid;
      if (currentUser !== null) {
      console.log('User available in Firebase Authentication')
    loginIcon.classList.remove('hidden')
    loginIcon.classList.add('flex')
    userIcon.classList.remove('flex')
    userIcon.classList.add('hidden')
    }
      // ...
    } else {   
        console.log('User not available in Firebase Authentication')
      // User is signed out
      // ...
    }
  });


  userIcon.addEventListener('click', ()=>{
    window.location.href = './auth/signin/signin.html'
  })


  logoutBtn.addEventListener('click', ()=>{
    console.log('Logout Button is working')


    signOut(auth).then(() => {
        // Sign-out successful.
        console.log('User successfully signout')
        loginIcon.classList.add('hidden')
        loginIcon.classList.remove('flex')
        userIcon.classList.remove('hidden')
        userIcon.classList.add('flex')
      }).catch((error) => {
        // An error happened.
      });
  })