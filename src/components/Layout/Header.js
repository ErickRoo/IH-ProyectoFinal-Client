import React, { useContext } from 'react';
import CartContext from '../context/Cart/CartContext';

function Header() {

  const ctxCart = useContext(CartContext);
  const { itemCount } = ctxCart.cart;

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
                    <option>CAD</option>

                    <option>USD</option>

                    <option>AUD</option>

                    <option>EUR</option>

                    <option>GBP</option>
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
              Get free delivery on orders over $100
            </p>

            <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
              <a href="#" className="text-sm font-medium text-white hover:text-gray-100">Create an account</a>
              <span className="h-6 w-px bg-gray-600" aria-hidden="true"></span>
              <a href="#" className="text-sm font-medium text-white hover:text-gray-100">Sign in</a>
            </div>
          </div>
        </div>

        {/* <!-- Secondary navigation --> */}
        <div className="bg-white">
          <div className="border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="h-16 flex items-center justify-between">
                {/* <!-- Logo (lg+) --> */}
                <div className="hidden lg:flex lg:items-center">
                  <a href="#">
                    <span className="sr-only">Workflow</span>
                    <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600" alt="" />
                  </a>
                </div>

                <div className="hidden h-full lg:flex">
                  {/* <!-- Mega menus --> */}
                  <div className="ml-8">
                    <div className="h-full flex justify-center space-x-8">
                      <div className="flex">
                        <div className="relative flex">
                          {/* <!-- Item active: "border-indigo-600 text-indigo-600", Item inactive: "border-transparent text-gray-700 hover:text-gray-800" --> */}
                          <button type="button" className="border-transparent text-gray-700 hover:text-gray-800 relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px" aria-expanded="false">
                            Women
                          </button>
                        </div>

                        {/* <!--
                        'Women' mega menu, show/hide based on flyout menu state.

                        Entering: "transition ease-out duration-200"
                          From: "opacity-0"
                          To: "opacity-100"
                        Leaving: "transition ease-in duration-150"
                          From: "opacity-100"
                          To: "opacity-0"
                      --> */}
                        <div className="absolute top-full inset-x-0 text-gray-500 sm:text-sm">
                          {/* <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow --> */}
                          <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true"></div>

                          {/* <div className="relative bg-white">
                            <div className="max-w-7xl mx-auto px-8">
                              <div className="grid grid-cols-2 items-start gap-y-10 gap-x-8 pt-10 pb-12">
                                <div className="grid grid-cols-2 gap-y-10 gap-x-8">
                                  <div>
                                    <p id="desktop-featured-heading-0" className="font-medium text-gray-900">
                                      Featured
                                    </p>
                                    <ul role="list" aria-labelledby="desktop-featured-heading-0" className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                      <li className="flex">
                                        <a href="#" className="hover:text-gray-800">
                                          Sleep
                                        </a>
                                      </li>

                                      <li className="flex">
                                        <a href="#" className="hover:text-gray-800">
                                          Swimwear
                                        </a>
                                      </li>

                                      <li className="flex">
                                        <a href="#" className="hover:text-gray-800">
                                          Underwear
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                  <div>
                                    <p id="desktop-categories-heading" className="font-medium text-gray-900">
                                      Categories
                                    </p>
                                    <ul role="list" aria-labelledby="desktop-categories-heading" className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                      <li className="flex">
                                        <a href="#" className="hover:text-gray-800">
                                          Basic Tees
                                        </a>
                                      </li>

                                      <li className="flex">
                                        <a href="#" className="hover:text-gray-800">
                                          Artwork Tees
                                        </a>
                                      </li>

                                      <li className="flex">
                                        <a href="#" className="hover:text-gray-800">
                                          Bottoms
                                        </a>
                                      </li>

                                      <li className="flex">
                                        <a href="#" className="hover:text-gray-800">
                                          Underwear
                                        </a>
                                      </li>

                                      <li className="flex">
                                        <a href="#" className="hover:text-gray-800">
                                          Accessories
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="grid grid-cols-2 gap-y-10 gap-x-8">
                                  <div>
                                    <p id="desktop-collection-heading" className="font-medium text-gray-900">
                                      Collection
                                    </p>
                                    <ul role="list" aria-labelledby="desktop-collection-heading" className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                      <li className="flex">
                                        <a href="#" className="hover:text-gray-800">
                                          Everything
                                        </a>
                                      </li>

                                      <li className="flex">
                                        <a href="#" className="hover:text-gray-800">
                                          Core
                                        </a>
                                      </li>

                                      <li className="flex">
                                        <a href="#" className="hover:text-gray-800">
                                          New Arrivals
                                        </a>
                                      </li>

                                      <li className="flex">
                                        <a href="#" className="hover:text-gray-800">
                                          Sale
                                        </a>
                                      </li>
                                    </ul>
                                  </div>

                                  <div>
                                    <p id="desktop-brand-heading" className="font-medium text-gray-900">
                                      Brands
                                    </p>
                                    <ul role="list" aria-labelledby="desktop-brand-heading" className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                      <li className="flex">
                                        <a href="#" className="hover:text-gray-800">
                                          Full Nelson
                                        </a>
                                      </li>

                                      <li className="flex">
                                        <a href="#" className="hover:text-gray-800">
                                          My Way
                                        </a>
                                      </li>

                                      <li className="flex">
                                        <a href="#" className="hover:text-gray-800">
                                          Re-Arranged
                                        </a>
                                      </li>

                                      <li className="flex">
                                        <a href="#" className="hover:text-gray-800">
                                          Counterfeit
                                        </a>
                                      </li>

                                      <li className="flex">
                                        <a href="#" className="hover:text-gray-800">
                                          Significant Other
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div> */}
                        </div>
                      </div>

                      <div className="flex">
                        <div className="relative flex">
                          {/* <!-- Item active: "border-indigo-600 text-indigo-600", Item inactive: "border-transparent text-gray-700 hover:text-gray-800" --> */}
                          <button type="button" className="border-transparent text-gray-700 hover:text-gray-800 relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px" aria-expanded="false">
                            Men
                          </button>
                        </div>

                        {/* <!--
                        'Men' mega menu, show/hide based on flyout menu state.

                        Entering: "transition ease-out duration-200"
                          From: "opacity-0"
                          To: "opacity-100"
                        Leaving: "transition ease-in duration-150"
                          From: "opacity-100"
                          To: "opacity-0"
                      --> */}
                        <div className="absolute top-full inset-x-0 text-gray-500 sm:text-sm">
                          {/* <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow --> */}
                          <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true"></div>

                          <div className="relative bg-white">
                            <div className="max-w-7xl mx-auto px-8">
                              <div className="grid grid-cols-2 items-start gap-y-10 gap-x-8 pt-10 pb-12">
                                <div className="grid grid-cols-2 gap-y-10 gap-x-8">
                                  <div>
                                    <p id="desktop-featured-heading-1" className="font-medium text-gray-900">
                                      Featured
                                    </p>
                                    <ul role="list" aria-labelledby="desktop-featured-heading-1" className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                      <li className="flex">
                                        <a href="#" className="hover:text-gray-800">
                                          Casual
                                        </a>
                                      </li>

                                      <li className="flex">
                                        <a href="#" className="hover:text-gray-800">
                                          Boxers
                                        </a>
                                      </li>

                                      <li className="flex">
                                        <a href="#" className="hover:text-gray-800">
                                          Outdoor
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                  <div>
                                    <p id="desktop-categories-heading" className="font-medium text-gray-900">
                                      Categories
                                    </p>
                                    <ul role="list" aria-labelledby="desktop-categories-heading" className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                      <li className="flex">
                                        <a href="#" className="hover:text-gray-800">
                                          Artwork Tees
                                        </a>
                                      </li>

                                      <li className="flex">
                                        <a href="#" className="hover:text-gray-800">
                                          Pants
                                        </a>
                                      </li>

                                      <li className="flex">
                                        <a href="#" className="hover:text-gray-800">
                                          Accessories
                                        </a>
                                      </li>

                                      <li className="flex">
                                        <a href="#" className="hover:text-gray-800">
                                          Boxers
                                        </a>
                                      </li>

                                      <li className="flex">
                                        <a href="#" className="hover:text-gray-800">
                                          Basic Tees
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="grid grid-cols-2 gap-y-10 gap-x-8">
                                  <div>
                                    <p id="desktop-collection-heading" className="font-medium text-gray-900">
                                      Collection
                                    </p>
                                    <ul role="list" aria-labelledby="desktop-collection-heading" className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                      <li className="flex">
                                        <a href="#" className="hover:text-gray-800">
                                          Everything
                                        </a>
                                      </li>

                                      <li className="flex">
                                        <a href="#" className="hover:text-gray-800">
                                          Core
                                        </a>
                                      </li>

                                      <li className="flex">
                                        <a href="#" className="hover:text-gray-800">
                                          New Arrivals
                                        </a>
                                      </li>

                                      <li className="flex">
                                        <a href="#" className="hover:text-gray-800">
                                          Sale
                                        </a>
                                      </li>
                                    </ul>
                                  </div>

                                  <div>
                                    <p id="desktop-brand-heading" className="font-medium text-gray-900">
                                      Brands
                                    </p>
                                    <ul role="list" aria-labelledby="desktop-brand-heading" className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                      <li className="flex">
                                        <a href="#" className="hover:text-gray-800">
                                          Significant Other
                                        </a>
                                      </li>

                                      <li className="flex">
                                        <a href="#" className="hover:text-gray-800">
                                          My Way
                                        </a>
                                      </li>

                                      <li className="flex">
                                        <a href="#" className="hover:text-gray-800">
                                          Counterfeit
                                        </a>
                                      </li>

                                      <li className="flex">
                                        <a href="#" className="hover:text-gray-800">
                                          Re-Arranged
                                        </a>
                                      </li>

                                      <li className="flex">
                                        <a href="#" className="hover:text-gray-800">
                                          Full Nelson
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <a href="#" className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Company</a>

                      <a href="#" className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Stores</a>
                    </div>
                  </div>
                </div>

                {/* <!-- Mobile menu and search (lg-) --> */}
                <div className="flex-1 flex items-center lg:hidden">
                  {/* <!-- Mobile menu toggle, controls the 'mobileMenuOpen' state. --> */}
                  <button type="button" className="-ml-2 bg-white p-2 rounded-md text-gray-400">
                    <span className="sr-only">Open menu</span>
                    {/* <!-- Heroicon name: outline/menu --> */}
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>

                  {/* <!-- Search --> */}
                  <a href="#" className="ml-2 p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    {/* <!-- Heroicon name: outline/search --> */}
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </a>
                </div>

                {/* <!-- Logo (lg-) --> */}
                <a href="#" className="lg:hidden">
                  <span className="sr-only">Workflow</span>
                  <img src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600" alt="" className="h-8 w-auto" />
                </a>

                <div className="flex-1 flex items-center justify-end">
                  <div className="flex items-center lg:ml-8">
                    <div className="flex space-x-8">
                      <div className="hidden lg:flex">
                        <a href="#" className="-m-2 p-2 text-gray-400 hover:text-gray-500">
                          <span className="sr-only">Search</span>
                          {/* <!-- Heroicon name: outline/search --> */}
                          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                        </a>
                      </div>

                      <div className="flex">
                        <a href="#" className="-m-2 p-2 text-gray-400 hover:text-gray-500">
                          <span className="sr-only">Account</span>
                          {/* <!-- Heroicon name: outline/user --> */}
                          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </a>
                      </div>
                    </div>

                    <span className="mx-4 h-6 w-px bg-gray-200 lg:mx-6" aria-hidden="true"></span>

                    <div className="flow-root">
                      <a href="#" className="group -m-2 p-2 flex items-center">
                        {/* <!-- Heroicon name: outline/shopping-cart --> */}
                        <svg className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">{itemCount}</span>
                        <span className="sr-only">items in cart, view bag</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
