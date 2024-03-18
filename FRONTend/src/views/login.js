import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getDatabase, ref, update } from 'firebase/database';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import './login.css';

const Login = () => {
  const history=useHistory();
  const [username, setUsername] = useState('');
  const [pass, setPassword] = useState('');

  const firebaseConfig = {
    apiKey: "AIzaSyCnYIMX6LlqF1IA16rnb_UQclXFzl-JeD8",
    authDomain: "e-tender-755ed.firebaseapp.com",
    projectId: "e-tender-755ed",
    storageBucket: "e-tender-755ed.appspot.com",
    messagingSenderId: "225849465234",
    appId: "1:225849465234:web:5aa536dae9847bfd52094b",
    measurementId: "G-5YQX8FCFC4"
  };

  initializeApp(firebaseConfig);
  
  const auth = getAuth();
  const db = getDatabase();
  
  const login = () => {
    const email = username;
    const password = pass;
    
    if (!validate_email(email) || !validate_password(password)) {
      return;
    }
    
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        const user = auth.currentUser;
        const db_ref = ref(db, "users/" + user.uid);
        const user_data = {
          last_login: Date.now(),
        };
        update(db_ref, user_data);
        history.push('/');
    })
      .catch((error) => {
        const err_code = error.code;
        console.log('Firebase Login Error:', err_code);
        const error_message = error.message;
        console.error('Firebase Login Error:', err_code, error_message,error);
        alert(error_message);
      });
  };

  const validate_email = (email) => {
    const expression = /^[^@]+@\w+(\.\w+)+\w$/;
    return expression.test(email);
  };

  const validate_password = (password) => {
    return password.length >= 6;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login();
    console.log('Login attempted:', username, pass);
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <label className="login-label" htmlFor="username">
          Username:
        </label>
        <input
          className="login-input"
          type="text"
          id="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          required
        />
        <label className="login-label" htmlFor="password">
          Password:
        </label>
        <input
          className="login-input"
          type="password"
          id="password"
          value={pass}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <button className="login-button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
