// Import FirebaseAuth and firebase.
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCWcY_15S_3xRn-6McM6vRADGo9V9UnGxk",
  authDomain: "web-portal-a69d1.firebaseapp.com",
  databaseURL: "https://web-portal-a69d1.firebaseio.com",
  projectId: "web-portal-a69d1",
  storageBucket: "web-portal-a69d1.appspot.com",
  messagingSenderId: "929537871676",
  appId: "1:929537871676:web:39b98c84f5599c004dd839"
};

firebase.initializeApp(firebaseConfig);

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/signedIn',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID
  ]
};

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: 'someValue'
    };
  }

  render() {
    return (
      <div style={{width: "100%", textAlign:"center"}}>
        <h1> Login </h1>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      </div>
    );
  }
}

export default Login;
