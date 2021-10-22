import Swal from "sweetalert2";

import React, { useState, useContext } from 'react';

import UsersContext from '../../context/Users/UsersContext';

import eesLogo from "../../assets/logo.png";

function Login() {
  // Importar el contexto
  const ctxUser = useContext(UsersContext);
  const { loginUser } = ctxUser;

  // Estado local
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  // Funciones de estado local
  const handleInputs = (event) => {
    event.preventDefault();

    setUserData({
      ...userData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!(userData.email && userData.password)) {
      return (
        Swal.fire({
          title: 'Error al llenar el formulario',
          text: 'Por favor llene los campos correctamente',
          icon: "error"
        })
      )
    } else {
      loginUser(userData);
      Swal.fire({
        title: `Bienvenido`,
        text: 'Tenemos nuevos productos!!!',
        icon: "success",
        stopKeydownPropagation: false,
      })
    }

    // loginUser(userData);

  }

  return (
    <>
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img className="mx-auto h-12 w-auto" src={eesLogo} alt="Workflow" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Iniciar sesión
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={(e) => { handleSubmit(e) }}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Tu correo electrónico
                </label>
                <div className="mt-1">
                  <input
                    name="email"
                    type="email"
                    value={userData.email}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    onChange={(e) => { handleInputs(e) }}
                  />

                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Tu password
                </label>
                <div className="mt-1">
                  <input
                    name="password"
                    type="password"
                    value={userData.password}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    onChange={(e) => { handleInputs(e) }}
                  />
                </div>
              </div>


              <div>
                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Iniciar sesión
                </button>
              </div>
            </form>


          </div>
        </div>
      </div>
    </>
  )
}

export default Login
