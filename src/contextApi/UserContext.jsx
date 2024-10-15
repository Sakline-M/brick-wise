/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const UserContext = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(1);

  const token = localStorage.getItem("brick_token");
  useEffect(() => {
    if (!token) return;
    setLoading(true);
    fetch("https://brick-wise-server.onrender.com/api/v1/user/single", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setUser(data.user);
          setLoading(false);
        } else console.log(data);
      });
  }, [token, refresh]);

  const logout = () => {
    localStorage.removeItem("brick_token");
    setUser({});
    setRefresh((prev) => prev + 1);
  };

  const value = { user, refresh, setRefresh, loading, logout };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default UserContext;
