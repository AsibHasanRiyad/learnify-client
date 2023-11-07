/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../providers/Authprovider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({children}) => {
  const { loading, user } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className=" h-screen flex justify-center items-center">
        
        {/* <span className="loading loading-spinner text-white loading-lg"></span> */}
        <img className=" w-64" src="https://i.ibb.co/WpBbkVY/sad-scared.gif" alt="" />
      </div>
    );
  }
  if (user) {
    return children
  }
  else return <Navigate state={location.pathname} to={'/login'}></Navigate>
}

export default PrivateRoutes;
