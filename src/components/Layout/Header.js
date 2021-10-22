import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import CartContext from '../../context/Cart/CartContext';
import UsersContext from '../../context/Users/UsersContext';

import eesLogo from "../../assets/logo.png"
import eesMainLogo from "../../assets/EES-LOGO.png"

function Header() {

  const ctxCart = useContext(CartContext);
  const { itemCount } = ctxCart.cart;

  const ctxUser = useContext(UsersContext);
  const { user,
    authStatus,
    logoutUser } = ctxUser;

  return (
    <header className="relative z-10">
      <nav aria-label="Top">
        {/* <!-- Top navigation --> */}
        <div className="bg-gray-900">
          <div className="max-w-7xl mx-auto h-10 px-4 flex items-center justify-between sm:px-6 lg:px-8">
            {/* <!-- Currency selector --> */}
            <form className="hidden lg:block lg:flex-1">
              <div className="flex">
                <label htmlFor="desktop-currency" className="sr-only">Currency</label>
                <div className="-ml-2 group relative bg-gray-900 border-transparent rounded-md focus-within:ring-2 focus-within:ring-white">
                  <select id="desktop-currency" name="currency" className="bg-none bg-gray-900 border-transparent rounded-md py-0.5 pl-2 pr-5 flex items-center text-sm font-medium text-white group-hover:text-gray-100 focus:outline-none focus:ring-0 focus:border-transparent">
                    <option>MXN</option>

                    <option>USD</option>

                  </select>
                  <div className="absolute right-0 inset-y-0 flex items-center pointer-events-none">
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" className="w-5 h-5 text-gray-300">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 8l4 4 4-4" />
                    </svg>
                  </div>
                </div>
              </div>
            </form>

            <p className="flex-1 text-center text-sm font-medium text-white lg:flex-none">
              Envío gratis en tu primera compra.
            </p>

            {
              authStatus ?
                <>
                  <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                    <Link to="/" className="text-sm font-medium text-white hover:text-gray-100">Hola {user.username}</Link>
                    <span className="h-6 w-px bg-gray-600" aria-hidden="true"></span>
                    <Link to="/" onClick={() => { logoutUser() }} className="text-sm font-medium text-white hover:text-gray-100">Cerrar sesión</Link>
                  </div>

                  <div className="lg:hidden flex flex-1 items-center justify-end space-x-6">
                    <Link to="/" className="text-sm font-medium text-white hover:text-gray-100">Hola {user.username}</Link>
                    <span className="h-6 w-px bg-gray-600" aria-hidden="true"></span>
                    <Link to="/" onClick={() => { logoutUser() }} className="text-sm font-medium text-white hover:text-gray-100">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg>
                    </Link>
                  </div>
                </>
                :
                <>
                  <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                    <Link to="/crear-cuenta" className="text-sm font-medium text-white hover:text-gray-100">Create an account</Link>
                    <span className="h-6 w-px bg-gray-600" aria-hidden="true"></span>
                    <Link to="/iniciar-sesion" className="text-sm font-medium text-white hover:text-gray-100">Sign in</Link>
                  </div>

                  <div className="lg:hidden flex flex-1 items-center justify-end space-x-6">
                    <Link to="/crear-cuenta" className="text-sm font-medium text-white hover:text-gray-100"> Signup
                    </Link>
                    <span className="h-6 w-px bg-gray-600" aria-hidden="true"></span>
                    <Link to="/iniciar-sesion" className="flex text-sm font-medium text-white hover:text-gray-100">Login
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                      </svg></Link>
                  </div>
                </>

            }

          </div>
        </div>

        {/* <!-- Secondary navigation --> */}
        <div className="bg-white">
          <div className="border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="h-16 flex items-center justify-between">
                {/* <!-- Logo (lg+) --> */}
                <div className="hidden lg:flex lg:items-center">
                  <Link to="/">
                    <span className="sr-only">Workflow</span>
                    <img className="h-12 w-auto" src={eesMainLogo} alt="" />
                  </Link>
                </div>

                <div className="hidden h-full lg:flex">
                  {/* <!-- Mega menus --> */}
                  <div className="ml-8">
                    <div className="h-full flex space-x-8">
                      <Link to="/lista-equipos" className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Equipos</Link>
                      {
                        (authStatus && (user.rol === 0)) ?
                          <Link to="/crear-equipos" className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Crear Equipo</Link>
                          :
                          (authStatus && (user.rol === 1)) ?
                            <>
                              <Link to="/mis-compras" className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Mis Compras</Link>

                              <Link to="/mis-rentas" className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Mis Rentas</Link>

                              <Link to="/servicios" className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Servicios</Link>
                            </>
                            :
                            <>
                              <Link to="/mision-vision-valores" className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Nosotros</Link>

                            </>
                      }
                    </div>
                  </div>
                </div>

                {/* <!-- Logo (lg-) --> */}
                <Link to="/" className="lg:hidden">
                  <span className="sr-only">Workflow</span>
                  <img src={eesMainLogo} alt="" className="h-12 w-auto" />
                </Link>

                <div className="lg:hidden h-full flex">
                  <div className="ml-8">
                    <div className="h-full flex flex-wrap space-x-8">
                      <Link to="/lista-equipos" className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Equipos</Link>
                      {
                        (authStatus && (user.rol === 0)) ?
                          <Link to="/crear-equipos" className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Crear Equipo</Link>
                          :
                          (authStatus && (user.rol === 1)) ?
                            <>
                              <Link to="/mis-compras" className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Mis Compras</Link>

                              <Link to="/mis-rentas" className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Mis Rentas</Link>

                              <Link to="/servicios" className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Servicios</Link>
                            </>
                            :
                            <>
                              <Link to="/mision-vision-valores" className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Nosotros</Link>

                            </>
                      }
                    </div>
                  </div>
                </div>

                <div className="flex-1 flex items-center justify-end">
                  <div className="flex items-center lg:ml-8">
                    <div className="flex space-x-8">

                      <div className="flex">
                        {
                          authStatus ?
                            <Link to="/perfil" className="-m-2 p-2 text-gray-400 hover:text-gray-500">
                              <span className="sr-only">Account</span>
                              {/* <!-- Heroicon name: outline/user --> */}
                              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                              </svg>
                            </Link>
                            :
                            <Link to="/iniciar-sesion" className="-m-2 p-2 text-gray-400 hover:text-gray-500">
                              <span className="sr-only">Account</span>
                              {/* <!-- Heroicon name: outline/user --> */}
                              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                              </svg>
                            </Link>

                        }
                      </div>
                    </div>

                    <span className="mx-4 h-6 w-px bg-gray-200 lg:mx-6" aria-hidden="true"></span>

                    <div className="flow-root">
                      <Link to="/form-compra" className="group -m-2 p-2 flex items-center">
                        {/* <!-- Heroicon name: outline/shopping-cart --> */}
                        <svg className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        {
                          itemCount > 0 ?
                            <>
                              <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">{itemCount}</span>
                              <span className="sr-only">items in cart, view bag</span>
                            </>
                            :
                            null
                        }
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav >
    </header >
  )
}

export default Header