import React, { useState, useContext } from 'react'

import CartContext from '../../context/Cart/CartContext'
import OrdersContext from '../../context/Orders/OrdersContext';

function Buy() {

  // Importar el contexto
  const ctxCart = useContext(CartContext);
  const { cart } = ctxCart;

  const ctxOrders = useContext(OrdersContext);
  const { createOrder } = ctxOrders;

  // Estado local
  const [newPurchase, setNewPurchase] = useState({
    name: "",
    surname: "",
    email: "",
    phone: undefined,
    company: "",
    state: "",
    city: "",
    zip: undefined,
    message: "",
  })

  // Funciones estado local
  const handleInputs = (event) => {
    event.preventDefault();

    setNewPurchase({
      ...newPurchase,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    createOrder(newPurchase);
  }

  return (
    <div className="bg-white">

      <main className="max-w-7xl mx-auto px-4 pt-4 pb-16 sm:px-6 sm:pt-8 sm:pb-24 lg:px-8 xl:px-2 xl:pt-14">
        <h1 className="sr-only">Checkout</h1>

        <div className="max-w-lg mx-auto grid grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-lg mx-auto w-full">
            <h2 className="sr-only">Order summary</h2>

            <div className="flow-root">
              <ul role="list" className="-my-6 divide-y divide-gray-200">
                {
                  cart.cartItems.map((e) => {
                    return (
                      <>
                        <li className="py-6 flex space-x-6">
                          <img src="https://tailwindui.com/img/ecommerce-images/checkout-page-05-product-01.jpg" alt="Front of women&#039;s basic tee in heather gray." className="flex-none w-24 h-24 object-center object-cover bg-gray-100 rounded-md" />
                          <div className="flex-auto">
                            <div className="space-y-1 sm:flex sm:items-start sm:justify-between sm:space-x-6">
                              <div className="flex-auto text-sm font-medium space-y-1">
                                <h3 className="text-gray-900">
                                  <a href="#">{e.name}</a>
                                </h3>
                                <p className="text-gray-900">${e.price}</p>
                                {/* <p className="hidden text-gray-500 sm:block">Gray</p> */}
                              </div>
                              <div className="flex-none flex space-x-4">
                                {/* <button type="button" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">Edit</button> */}
                                <div className="flex pl-4">
                                  <button type="button" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>

                      </>
                    )
                  })
                }

              </ul>
            </div>

            <dl className="text-sm font-medium text-gray-500 mt-10 space-y-6">
              {/* <div className="flex justify-between">
                <dt>Subtotal</dt>
                <dd className="text-gray-900">$104.00</dd>
              </div>
              <div className="flex justify-between">
                <dt>Taxes</dt>
                <dd className="text-gray-900">$8.32</dd>
              </div>
              <div className="flex justify-between">
                <dt>Shipping</dt>
                <dd className="text-gray-900">$14.00</dd>
              </div> */}
              <div className="flex justify-between border-t border-gray-200 text-gray-900 pt-6">
                <dt className="text-base">Total</dt>
                <dd className="text-base">${cart.total}</dd>
              </div>
            </dl>
          </div>

          <div className="max-w-lg mx-auto w-full">

            <form className="mt-6" onSubmit={(event) => { handleSubmit(event) }}>
              <h2 className="text-lg font-medium text-gray-900">Formulario de compra.</h2>

              <div className="mt-6">
                <label htmlFor="orderform-name" className="block text-sm font-medium text-gray-700">Nombre: </label>
                <div className="mt-1">
                  <input type="text" id="orderform-name" name="name" className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={newPurchase.name}
                    onChange={(event) => { handleInputs(event) }}
                  />
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="orderform-surname" className="block text-sm font-medium text-gray-700">Apellidos: </label>
                <div className="mt-1">
                  <input type="text" id="orderform-surname" name="surname" className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={newPurchase.surname}
                    onChange={(event) => { handleInputs(event) }}
                  />
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="orderform-email" className="block text-sm font-medium text-gray-700">Email: </label>
                <div className="mt-1">
                  <input type="email" id="orderform-email" name="email" autoComplete="email" className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={newPurchase.email}
                    onChange={(event) => { handleInputs(event) }}
                  />
                </div>
              </div>

              <div className="mt-6">
                <label
                  htmlFor="orderform-phone" className="block text-sm font-medium text-gray-700">Phone number</label>
                <div className="mt-1">
                  <input type="number" name="phone" id="orderform-phone" autoComplete="tel" className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" value={newPurchase.phone}
                    onChange={(event) => { handleInputs(event) }} />
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="orderform-company" className="block text-sm font-medium text-gray-700">Empresa: </label>
                <div className="mt-1">
                  <input type="text" id="orderform-company" name="company" className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={newPurchase.company}
                    onChange={(event) => { handleInputs(event) }}
                  />
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="orderform-state" className="block text-sm font-medium text-gray-700">Estado: </label>
                <div className="mt-1">
                  <input type="text" id="orderform-state" name="state" className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={newPurchase.state}
                    onChange={(event) => { handleInputs(event) }}
                  />
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="orderform-city" className="block text-sm font-medium text-gray-700">Ciudad: </label>
                <div className="mt-1">
                  <input type="text" id="orderform-city" name="city" className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={newPurchase.city}
                    onChange={(event) => { handleInputs(event) }}
                  />
                </div>
              </div>

              <div className="mt-6">
                <label
                  htmlFor="orderform-zip" className="block text-sm font-medium text-gray-700">Código postal: </label>
                <div className="mt-1">
                  <input type="number" name="zip" id="orderform-zip" autoComplete="tel" className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={newPurchase.zip}
                    onChange={(event) => { handleInputs(event) }}
                  />
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="orderform-message" className="block text-sm font-medium text-gray-700">Comentarios: </label>
                <div className="mt-1">
                  <textarea type="text" id="orderform-message" name="message" className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={newPurchase.message}
                    onChange={(event) => { handleInputs(event) }}
                  />
                </div>
              </div>

              {/* <div className="mt-6 flex space-x-2">
                <div className="flex items-center h-5">
                  <input id="terms" name="terms" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                </div>
                <label htmlFor="terms" className="text-sm text-gray-500">I have read the terms and conditions and agree to the sale of my personal information to the highest bidder.</label>
              </div> */}

              {/* <!-- Submit button, enable/disable based on form state --> */}
              <button type="submit" className="mt-6 w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed">Continue</button>
            </form>

            <div className="mt-10 border-t border-b border-gray-200 divide-y divide-gray-200">
              <button type="button" disabled className="w-full py-6 text-left text-lg font-medium text-gray-500 cursor-auto">Payment details</button>
              <button type="button" disabled className="w-full py-6 text-left text-lg font-medium text-gray-500 cursor-auto">Shipping address</button>
              <button type="button" disabled className="w-full py-6 text-left text-lg font-medium text-gray-500 cursor-auto">Billing address</button>
              <button type="button" disabled className="w-full py-6 text-left text-lg font-medium text-gray-500 cursor-auto">Review</button>
            </div>
          </div>
        </div>
      </main>

      <footer className="flex items-center justify-between px-4 py-10 sm:px-6 sm:py-8 lg:px-8">
        <a href="#">
          <span className="sr-only">Workflow</span>
          <img src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600" alt="" className="h-8 w-auto" />
        </a>
        <div className="hidden sm:flex sm:items-center sm:space-x-8">
          <a href="#" className="text-sm font-medium text-gray-700">Contact support</a>
          <a href="#" className="p-2 -m-2 text-gray-400 hover:text-gray-500">
            <span className="sr-only">Account</span>
            {/* <!-- Heroicon name: outline/user --> */}
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Buy
