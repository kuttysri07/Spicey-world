import { useState } from "react";
import "./login.css";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [regemail, setRegEmail] = useState('');
  const [regpassword, setRegPassword] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');

  const [signemail, setSignEmail] = useState('');
  const [signpassword, setSignPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, regemail, regpassword);
      const user = userCredential.user;
      console.log(user);
      toast.success("You registered successfully!", { position: "top-right" });

      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          firstname: fname,
          lastname: lname,
          email: user.email,
        });
      }
    } catch (error) {
      console.error("Error registering user:", error.message);
      toast.error(error.message, { position: "top-right" });
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, signemail, signpassword);
      console.log("User Successfully logged in!");
      toast.success("Successfully logged in!", { position: "top-right" });
      window.location.href="/hero";
    } catch (error) {
      console.error("Error logging in:", error.message);
      toast.error(error.message, { position: "top-right" });
    }
  };

  return (
    <div className="box">
      {/* Login Form */}
      {!isRegistering && (
        <form onSubmit={handleLogin}>
          <div className="login">
            <h1>Login</h1>
            <input
              type="text"
              id="email"
              name="email"
              value={signemail}
              onChange={(e) => setSignEmail(e.target.value)}
              placeholder="Enter Email"
            />
            <br />
            <input
              type="password"
              id="password"
              name="password"
              value={signpassword}
              onChange={(e) => setSignPassword(e.target.value)}
              placeholder="Enter Password"
            />
            <div className="btns">
              <button
                type="submit"
                className={`btnlogin ${isRegistering ? '' : 'btn-black'}`}
              >
                Login
              </button>
              <button
                type="button"
                className={`btnlogin`}
                onClick={() => setIsRegistering(true)}
              >
                Sign Up
              </button>
            </div>
          </div>
        </form>
      )}

      {/* Registration Form */}
      {isRegistering && (
        <form onSubmit={handleRegister}>
          <div className="register">
            <h1>Sign Up</h1>
            <input
              type="text"
              id="fname"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              placeholder="Enter Your First Name"
            />
            <br />
            <input
              type="text"
              id="lname"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
              placeholder="Enter Your Last Name"
            />
            <br />
            <input
              type="text"
              id="email-register"
              value={regemail}
              onChange={(e) => setRegEmail(e.target.value)}
              placeholder="Enter Email"
            />
            <br />
            <input
              type="password"
              id="password-register"
              value={regpassword}
              onChange={(e) => setRegPassword(e.target.value)}
              placeholder="Enter Password"
            />
            <div className="btns">
              <button
                type="button"
                onClick={() => setIsRegistering(false)}
                className={`btnlogin`}
              >
                Login
              </button>
              <button
                type="submit"
                className={`btnlogin ${isRegistering ? 'btn-black' : ''}`}
              >
                Sign Up
              </button>
            </div>
          </div>
        </form>
      )}

      <ToastContainer />
    </div>
  );
};

export default Login;
