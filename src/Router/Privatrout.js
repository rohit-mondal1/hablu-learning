import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Authcontext } from "../components/Context/UserContext";

const Privatrout = ({ children }) => {
  const { usr, loder } = useContext(Authcontext);
  const location =useLocation();
  if (loder) {
    return (
      <div className="flex flex-col mx-auto m-8 rounded shadow-md w-60 sm:w-80 animate-pulse h-96">
        <div className="h-48 rounded-t dark:bg-gray-700"></div>
        <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 dark:bg-gray-900">
          <div className="w-full h-6 rounded dark:bg-gray-700"></div>
          <div className="w-full h-6 rounded dark:bg-gray-700"></div>
          <div className="w-3/4 h-6 rounded dark:bg-gray-700"></div>
        </div>
      </div>
    );
  }
  if (usr?.uid) {
    return children;
  }

  return <Navigate to="/login" state={{from : location}} replace></Navigate>;
};

export default Privatrout;
