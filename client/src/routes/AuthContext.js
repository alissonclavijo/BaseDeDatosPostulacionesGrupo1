// AuthContext.js
import React, { createContext, useState, useContext } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!Cookies.get("authToken"));

  const login = () => {
    // Here, you would perform the actual authentication logic on the server-side.
    // For now, we'll simply set isAuthenticated to true.
    setIsAuthenticated(true);
    // Save a random token in a cookie to simulate a logged-in session.
    const token = Math.random().toString(36).substr(2);
    Cookies.set("authToken", token);
    console.log("Token created:", token); // Console log the created token
  };

  const logout = () => {
    // Here, you would perform the actual logout logic on the server-side.
    // For now, we'll simply set isAuthenticated to false.
    setIsAuthenticated(false);
    // Remove the token from the cookie on logout.
    Cookies.remove("authToken");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
