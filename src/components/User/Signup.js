import React, { useContext, useState } from 'react';

import UsersContext from '../context/Users/UsersContext';

function Signup() {
  // Estado global
  const ctxUser = useContext(UsersContext);
  const { registerUser } = ctxUser;

  // Estado local
  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: ""
  })

  // Funciones locales
  const handleInputs = (event) => {
    event.preventDefault();

    setNewUser({
      ...newUser,
      [event.target.name]: event.target.value,
    })

  }

  const handleSubmit = (event) => {
    event.preventDefault();

    registerUser(newUser);

    setNewUser({
      username: "",
      email: "",
      password: ""
    })

  }

  return (
    <>
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Crea tu cuenta
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={(e) => { handleSubmit(e) }}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Escribe un usuario
                </label>
                <div className="mt-1">
                  <input
                    name="username"
                    type="text"
                    value={newUser.username}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    onChange={(e) => { handleInputs(e) }}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Correo electrónico
                </label>
                <div className="mt-1">
                  <input
                    name="email"
                    type="email"
                    value={newUser.email}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    onChange={(e) => { handleInputs(e) }}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Contraseña
                </label>
                <div className="mt-1">
                  <input
                    name="password"
                    type="password"
                    value={newUser.password}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    onChange={(e) => { handleInputs(e) }}
                  />
                </div>
              </div>


              <div>
                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Crear cuenta
                </button>
              </div>
            </form>


          </div>
        </div>
      </div>
    </>
  )
}

export default Signup
