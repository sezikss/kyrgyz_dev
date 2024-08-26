import axios from "axios";
import React, { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks";


export const loginApi = "http://3.38.98.134/auth/login";
export const signUpApi = "http://3.38.98.134/auth/signup";

export const Auth: React.FC = () => {
  const nav = useNavigate();
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirm, setConfirm] = useState<string>("");
  const [isLoginTab, setIsLoginTab] = useState<boolean>(true);

  const apiUrl = isLoginTab ? loginApi : signUpApi;
  const { login } = useAuth({ url: apiUrl });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName || !password) {
      alert("Please, fill the fields!");
      return;
    }
    if (!isLoginTab && password !== confirm) {
      alert("Passwords do not match");
      return;
    }
    try {
      const res: any = await login(userName, password);
      if (res?.success && res?.token) {
        Cookies.set('authtoken', res.token);
        nav('/');
      } else {
        alert(res.message);
      }
    } catch (error) {
      console.error("Authentication error:", error);
      alert("An error occurred. Please try again.");
    }
  };
  return (
    <div id="auth">
      <div className="container">
        <div className="auth">
          <form onSubmit={handleSubmit}>
            <h1>{isLoginTab ? "Login" : "Sign Up"}</h1>
            <div className="auth--content">
              <input
                type="text"
                placeholder="Email"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <input
                value={password}
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {!isLoginTab && (
                <input
                  value={confirm}
                  type="password"
                  placeholder="Confirm password"
                  onChange={(e) => setConfirm(e.target.value)}
                />
              )}
              <button type="submit">{isLoginTab ? "Login" : "Sign Up"}</button>

              {isLoginTab ? (
                <div className="auth--content__register">
                  <p>Do not have an account?</p>
                  <button
                    className="auth--content__register--btn"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsLoginTab(false);
                    }}
                  >
                    Sign Up
                  </button>
                </div>
              ) : (
                <div className="auth--content__register">
                  <p>Already have an account?</p>
                  <button
                    className="auth--content__register--btn"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsLoginTab(true);
                    }}
                  >
                    Login
                  </button>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;