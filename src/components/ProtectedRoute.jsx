// import { Navigate } from "react-router-dom";

// import { useContext } from "react";

// import { AuthContext } from "../context/AuthContext";

// const ProtectedRoute = ({ children }) => {
//   const { user } = useContext(AuthContext);

//   if (!user) {
//     return <Navigate to="/login" />;
//   }

//   return children;
// };

// export default ProtectedRoute;

import { Navigate } from "react-router-dom";

const ProtectedRoute = (props) => {
  const user = localStorage.getItem("user");

  if (user === null) {
    return <Navigate to="/login" />;
  }

  return props.children;
};

export default ProtectedRoute;
