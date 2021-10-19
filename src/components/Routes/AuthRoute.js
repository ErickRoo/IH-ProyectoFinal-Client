import React, { Component, useContext, useEffect, useState } from "react";
import {
  Route,
  Redirect
} from "react-router-dom";

import UsersContext from "../../context/Users/UsersContext";

const AuthRoute = ({ component: Component, ...props }) => {
  console.log(props);

  // Importando el contexto
  const ctxUser = useContext(UsersContext);
  const { authStatus, tokenVerification } = ctxUser;

  // Estado local
  const [loading, setLoading] = useState(true);

  // USEFFECT
  useEffect(() => {

    const verifyUser = async () => {

      await tokenVerification();
      setLoading(false);
    }

    verifyUser();
  }, [authStatus])

  return (
    <Route {...props} render={(props) => {

      if (loading) return null
      return authStatus ?
        (<Redirect to="/" />)
        :
        (<Component {...props} />)
    }} />
  )

};

export default AuthRoute;
