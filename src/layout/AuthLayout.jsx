import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebaseConfig";
import { Sidebar } from "../components/admin/Sidebar";

const AuthLayout = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
        navigate("/home");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  return (
    <div className="w-full bg-white font-poppins">
      <Sidebar />
      <div className="ml-64 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
