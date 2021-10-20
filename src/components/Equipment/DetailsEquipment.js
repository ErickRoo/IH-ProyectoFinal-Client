import React, { useContext } from 'react';

import EquipContext from '../../context/Equipment/EquipContext';
import CartContext from '../../context/Cart/CartContext';
import UsersContext from "../../context/Users/UsersContext"

function DetailsEquipment(props) {

  const params = props.match.params.idEquipo;

  // Importar el contexto
  const ctxEquipment = useContext(EquipContext);
  const { equipment } = ctxEquipment;

  const ctxCart = useContext(CartContext);
  const { cart, addProduct } = ctxCart;

  const ctxUser = useContext(UsersContext);
  const { user, authStatus } = ctxUser;

  const oneEquipment = equipment.find(element => {
    return element._id === params;
  })

  const auxAddProduct = (event) => {
    event.preventDefault();

    addProduct(oneEquipment);
  }

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
          {/* <!-- Image gallery --> */}
          <div className="flex flex-col-reverse">
            {/* <!-- Image selector --> */}
            <div className="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
              <div className="grid grid-cols-4 gap-6" aria-orientation="horizontal" role="tablist">
                <button id="tabs-1-tab-1" className="relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50" aria-controls="tabs-1-panel-1" role="tab" type="button">
                  <span className="sr-only">
                    Angled view
                  </span>
                  <span className="absolute inset-0 rounded-md overflow-hidden">
                    <img src="https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg" alt="" className="w-full h-full object-center object-cover" />
                  </span>
                  {/* <!-- Selected: "ring-indigo-500", Not Selected: "ring-transparent" --> */}
                  <span className="ring-transparent absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none" aria-hidden="true"></span>
                </button>

                {/* <!-- More images... --> */}
              </div>
            </div>

            <div className="w-full aspect-w-1 aspect-h-1">
              {/* <!-- Tab panel, show/hide based on tab state. --> */}
              <div id="tabs-1-panel-1" aria-labelledby="tabs-1-tab-1" role="tabpanel" tabIndex="0">
                <img src="https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg" alt="Angled front view with bag zipped and handles upright." className="w-full h-full object-center object-cover sm:rounded-lg" />
              </div>

              {/* <!-- More images... --> */}
            </div>
          </div>

          {/* <!-- Product info --> */}

          {
            (authStatus && (user.rol === 1)) ?
              <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
                <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{oneEquipment.name}</h1>

                <div className="mt-3">
                  <h2 className="sr-only">Product information</h2>
                  <p className="text-3xl text-gray-900">${oneEquipment.price}</p>
                </div>

                {/* <!-- Reviews --> */}

                <div className="mt-6">
                  <h3 className="sr-only">Description</h3>

                  <div className="text-base text-gray-700 space-y-6">
                    <p>{oneEquipment.description}</p>
                  </div>
                </div>

                <form className="mt-6">
                  {/* <!-- Colors --> */}

                  <div className="mt-10 flex sm:flex-col1">
                    <button onClick={(event) => { auxAddProduct(event) }} className="max-w-xs flex-1 bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 sm:w-full">Add to cart</button>

                    <button type="button" className="ml-4 py-3 px-3 rounded-md flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500">
                      {/* <!-- Heroicon name: outline/heart --> */}
                      <svg className="h-6 w-6 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      <span className="sr-only">Add to favorites</span>
                    </button>
                  </div>
                </form>

                {/* <section aria-labelledby="details-heading" className="mt-12">
              <h2 id="details-heading" className="sr-only">Additional details</h2>

              <div className="border-t divide-y divide-gray-200">
                <div>
                  <h3>
                    <!-- Expand/collapse question button -->
                    <button type="button" className="group relative w-full py-6 flex justify-between items-center text-left" aria-controls="disclosure-1" aria-expanded="false">
                      <!-- Open: "text-indigo-600", Closed: "text-gray-900" -->
                      <span className="text-gray-900 text-sm font-medium">
                        Features
                      </span>
                      <span className="ml-6 flex items-center">
                        <!--
                      Heroicon name: outline/plus-sm

                      Open: "hidden", Closed: "block"
                    -->
                        <svg className="block h-6 w-6 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        <!--
                      Heroicon name: outline/minus-sm

                      Open: "block", Closed: "hidden"
                    --> 
                        <svg className="hidden h-6 w-6 text-indigo-400 group-hover:text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6" />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  <div className="pb-6 prose prose-sm" id="disclosure-1">
                    <ul role="list">
                      <li>Multiple strap configurations</li>

                      <li>Spacious interior with top zip</li>

                      <li>Leather handle and tabs</li>

                      <li>Interior dividers</li>

                      <li>Stainless strap loops</li>

                      <li>Double stitched construction</li>

                      <li>Water-resistant</li>
                    </ul>
                  </div>
                </div>

                <!-- More sections... -->
              </div>
            </section> */}
              </div>

              :
              (authStatus && (user.rol === 0)) ?
                <>
                  <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
                    <div className="sm:col-span-3">
                      <label for="create-name" className="block text-sm font-medium text-gray-700" >
                        Nombre del equipo.
                      </label>
                      <div className="mt-1">
                        <input
                          id="create-name"
                          type="text"
                          name="name"
                          className="p-1 border border-gray shadow-sm px-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent block w-full pr-6 sm:text-sm border-gray-300"
                        />
                      </div>
                    </div>

                    <form className="mt-6">
                      <div className="mt-3">
                        <h2 className="sr-only">Product information</h2>
                        <p className="text-3xl text-gray-900">${oneEquipment.price}</p>
                      </div>

                      {/* <!-- Reviews --> */}

                      <div className="mt-6">
                        <h3 className="sr-only">Description</h3>

                        <div className="text-base text-gray-700 space-y-6">
                          <p>{oneEquipment.description}</p>
                        </div>
                      </div>

                      {/* <!-- Colors --> */}

                      <div className="mt-10 flex sm:flex-col1">
                        <button onClick={(event) => { auxAddProduct(event) }} className="max-w-xs flex-1 bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 sm:w-full">Add to cart</button>

                        <button type="button" className="ml-4 py-3 px-3 rounded-md flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500">
                          {/* <!-- Heroicon name: outline/heart --> */}
                          <svg className="h-6 w-6 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                          <span className="sr-only">Add to favorites</span>
                        </button>
                      </div>
                    </form>

                    {/* <section aria-labelledby="details-heading" className="mt-12">
              <h2 id="details-heading" className="sr-only">Additional details</h2>

              <div className="border-t divide-y divide-gray-200">
                <div>
                  <h3>
                    <!-- Expand/collapse question button -->
                    <button type="button" className="group relative w-full py-6 flex justify-between items-center text-left" aria-controls="disclosure-1" aria-expanded="false">
                      <!-- Open: "text-indigo-600", Closed: "text-gray-900" -->
                      <span className="text-gray-900 text-sm font-medium">
                        Features
                      </span>
                      <span className="ml-6 flex items-center">
                        <!--
                      Heroicon name: outline/plus-sm

                      Open: "hidden", Closed: "block"
                    -->
                        <svg className="block h-6 w-6 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        <!--
                      Heroicon name: outline/minus-sm

                      Open: "block", Closed: "hidden"
                    --> 
                        <svg className="hidden h-6 w-6 text-indigo-400 group-hover:text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6" />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  <div className="pb-6 prose prose-sm" id="disclosure-1">
                    <ul role="list">
                      <li>Multiple strap configurations</li>

                      <li>Spacious interior with top zip</li>

                      <li>Leather handle and tabs</li>

                      <li>Interior dividers</li>

                      <li>Stainless strap loops</li>

                      <li>Double stitched construction</li>

                      <li>Water-resistant</li>
                    </ul>
                  </div>
                </div>

                <!-- More sections... -->
              </div>
            </section> */}
                  </div>
                </>
                :
                null
          }
        </div>
      </div>
    </div>
  )
}

export default DetailsEquipment
