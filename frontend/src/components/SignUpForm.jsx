import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SignUpForm.css';


const SignUpForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:3000/signup', {
        username,
        password,
      });

      navigate('/login');
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage('An error occurred');
      }
    }
  };

  return (
    <div class="form-container">
  <h2>Sign Up</h2>
  <form onSubmit={handleSignUp}>
    <input
      type="text"
      placeholder="Username"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
    />
    <input
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
    <button type="submit">Sign Up</button>
  </form>
  {errorMessage && <p class="error-message">{errorMessage}</p>}
</div>
  );
};

export default SignUpForm;

// import React, { useState, useContext } from 'react';
// import axios from 'axios';
// import { AuthContext } from './AuthContext';

// const SignUpForm = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const { setAuth } = useContext(AuthContext);
//   const [error, setError] = useState('');

//   const handleUsernameChange = (e) => {
//     setUsername(e.target.value);
//   };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:5000/register', {
//         username,
//         email,
//         password,
//       });

//       // Handle the response from the API
//       if (response.status === 200) {
//         // Registration successful
//         setAuth(true);
//       } else {
//         // Registration failed
//         setError('Registration failed. Please try again.');
//       }
//     } catch (error) {
//       // Handle any errors that occur during the API request
//       setError('An error occurred. Please try again later.');
//       console.log('Error during registration:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Sign Up</h2>
//       <form onSubmit={handleSubmit}>
//         {error && <p>{error}</p>}
//         <div>
//           <label htmlFor="username">Username:</label>
//           <input type="text" id="username" value={username} onChange={handleUsernameChange} />
//         </div>
//         <div>
//           <label htmlFor="email">Email:</label>
//           <input type="email" id="email" value={email} onChange={handleEmailChange} />
//         </div>
//         <div>
//           <label htmlFor="password">Password:</label>
//           <input type="password" id="password" value={password} onChange={handlePasswordChange} />
//         </div>
//         <button type="submit">Sign Up</button>
//       </form>
//     </div>
//   );
// };

// export default SignUpForm;