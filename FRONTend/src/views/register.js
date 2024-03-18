import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, update,set } from 'firebase/database';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const Register = () => {
  const [username, setUsername] = useState('');
  const [pass, setPassword] = useState('');
  const [name, setName] = useState('');

  const firebaseConfig = {
    apiKey: "AIzaSyCnYIMX6LlqF1IA16rnb_UQclXFzl-JeD8",
    authDomain: "e-tender-755ed.firebaseapp.com",
    projectId: "e-tender-755ed",
    storageBucket: "e-tender-755ed.appspot.com",
    messagingSenderId: "225849465234",
    appId: "1:225849465234:web:5aa536dae9847bfd52094b",
    measurementId: "G-5YQX8FCFC4"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getDatabase();


  const register = () => {
    const email = username;
    const password = pass;
    const fullName = name;
  
    if (!validate_email(email) || !validate_password(password) || !validate_field(fullName)) {
      return;
    }
  
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const dbRef = ref(db, "users/" + user.uid); // Create a reference to the "users" collection
        const user_data = {
          Email: email,
          Full_Name: fullName,
          last_login: Date.now(),
        };
        console.log(user_data);
        set(dbRef, user_data); // Use set to add user data
        alert("User Created!");
      })
      .catch((error) => {
        const error_code = error.code;
        const error_message = error.message;
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

  const validate_field = (field) => {
    return field && field.length > 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    register();
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Register</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <label className="login-label" htmlFor="Name">
          Name:
        </label>
        <input
          className="login-input"
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
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
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
