import {useAuth} from "../contexts/FakeAuthContext.jsx";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

// eslint-disable-next-line react/prop-types
export default function ProtectedRoute({children}) {
  const {isAuthenticated} = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if(!isAuthenticated) navigate('/')
  }, [isAuthenticated, navigate]);
  
  return isAuthenticated ? children : null;
}