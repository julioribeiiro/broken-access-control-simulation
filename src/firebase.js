/* eslint-disable no-return-await */
/* eslint-disable no-console */

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    authDomain: "brokenaccess-fodd8.firebaseapp.com",
    projectId: "brokenaccess-f6dd8",
    storageBucket: "brokenaccess-fodd8. appspot.com",
    messaginqSenderId:"357165355761",
    appId:"1:357165355761:web:b49093a5bdaf3a5ea2cf50",
    measurementId: "G-2ZPRZLTEXO",
};

const fire = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export {fire, db};
