import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import CartContext from './../context/Cart/CartContext';

function Home() {

  const ctxCart = useContext(CartContext);
  const { itemCount } = ctxCart.cart;

  return (
    <>

      <div className="bg-white dark">
        {/* <!--
    Mobile menu

    Off-canvas menu for mobile, show/hide based on off-canvas menu state.
  --> */}
        <div className="fixed inset-0 flex z-40 lg:hidden" role="dialog" aria-modal="true">
          {/* <!--
      Off-canvas menu overlay, show/hide based on off-canvas menu state.

      Entering: "transition-opacity ease-linear duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "transition-opacity ease-linear duration-300"
        From: "opacity-100"
        To: "opacity-0"
    --> */}
          {/* <div className="fixed inset-0 bg-black bg-opacity-25" aria-hidden="true"></div> */}

          {/* <!--
      Off-canvas menu, show/hide based on off-canvas menu state.

      Entering: "transition ease-in-out duration-300 transform"
        From: "-translate-x-full"
        To: "translate-x-0"
      Leaving: "transition ease-in-out duration-300 transform"
        From: "translate-x-0"
        To: "-translate-x-full"
    --> */}
          {/* <div className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
            <div className="px-4 pt-5 pb-2 flex">
              <button type="button" className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400">
                <span className="sr-only">Close menu</span>
                <!-- Heroicon name: outline/x --> 
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <!-- Links --> 
            <div className="mt-2">
              <div className="border-b border-gray-200">
                <div className="-mb-px flex px-4 space-x-8" aria-orientation="horizontal" role="tablist">
                  <!-- Selected: "text-indigo-600 border-indigo-600", Not Selected: "text-gray-900 border-transparent" -->
                  <button id="tabs-1-tab-1" className="text-gray-900 border-transparent flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium" aria-controls="tabs-1-panel-1" role="tab" type="button">
                    Women
                  </button>

                   <!-- Selected: "text-indigo-600 border-indigo-600", Not Selected: "text-gray-900 border-transparent" --> 
                  <button id="tabs-1-tab-2" className="text-gray-900 border-transparent flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium" aria-controls="tabs-1-panel-2" role="tab" type="button">
                    Men
                  </button>
                </div>
              </div>

               <!-- 'Women' tab panel, show/hide based on tab state. --> 
              <div id="tabs-1-panel-1" className="px-4 pt-10 pb-6 space-y-12" aria-labelledby="tabs-1-tab-1" role="tabpanel" tabIndex="0">
                <div className="grid grid-cols-1 items-start gap-y-10 gap-x-6">
                  <div className="grid grid-cols-1 gap-y-10 gap-x-6">
                    <div>
                      <p id="mobile-featured-heading-0" className="font-medium text-gray-900">
                        Featured
                      </p>
                      <ul role="list" aria-labelledby="mobile-featured-heading-0" className="mt-6 space-y-6">
                        <li className="flex">
                          <a href="#" className="text-gray-500">
                            Sleep
                          </a>
                        </li>

                        <li className="flex">
                          <a href="#" className="text-gray-500">
                            Swimwear
                          </a>
                        </li>

                        <li className="flex">
                          <a href="#" className="text-gray-500">
                            Underwear
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p id="mobile-categories-heading" className="font-medium text-gray-900">
                        Categories
                      </p>
                      <ul role="list" aria-labelledby="mobile-categories-heading" className="mt-6 space-y-6">
                        <li className="flex">
                          <a href="#" className="text-gray-500">
                            Basic Tees
                          </a>
                        </li>

                        <li className="flex">
                          <a href="#" className="text-gray-500">
                            Artwork Tees
                          </a>
                        </li>

                        <li className="flex">
                          <a href="#" className="text-gray-500">
                            Bottoms
                          </a>
                        </li>

                        <li className="flex">
                          <a href="#" className="text-gray-500">
                            Underwear
                          </a>
                        </li>

                        <li className="flex">
                          <a href="#" className="text-gray-500">
                            Accessories
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-y-10 gap-x-6">
                    <div>
                      <p id="mobile-collection-heading" className="font-medium text-gray-900">
                        Collection
                      </p>
                      <ul role="list" aria-labelledby="mobile-collection-heading" className="mt-6 space-y-6">
                        <li className="flex">
                          <a href="#" className="text-gray-500">
                            Everything
                          </a>
                        </li>

                        <li className="flex">
                          <a href="#" className="text-gray-500">
                            Core
                          </a>
                        </li>

                        <li className="flex">
                          <a href="#" className="text-gray-500">
                            New Arrivals
                          </a>
                        </li>

                        <li className="flex">
                          <a href="#" className="text-gray-500">
                            Sale
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <p id="mobile-brand-heading" className="font-medium text-gray-900">
                        Brands
                      </p>
                      <ul role="list" aria-labelledby="mobile-brand-heading" className="mt-6 space-y-6">
                        <li className="flex">
                          <a href="#" className="text-gray-500">
                            Full Nelson
                          </a>
                        </li>

                        <li className="flex">
                          <a href="#" className="text-gray-500">
                            My Way
                          </a>
                        </li>

                        <li className="flex">
                          <a href="#" className="text-gray-500">
                            Re-Arranged
                          </a>
                        </li>

                        <li className="flex">
                          <a href="#" className="text-gray-500">
                            Counterfeit
                          </a>
                        </li>

                        <li className="flex">
                          <a href="#" className="text-gray-500">
                            Significant Other
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 'Men' tab panel, show/hide based on tab state. --> 
              <div id="tabs-1-panel-2" className="px-4 pt-10 pb-6 space-y-12" aria-labelledby="tabs-1-tab-2" role="tabpanel" tabIndex="0">
                <div className="grid grid-cols-1 items-start gap-y-10 gap-x-6">
                  <div className="grid grid-cols-1 gap-y-10 gap-x-6">
                    <div>
                      <p id="mobile-featured-heading-1" className="font-medium text-gray-900">
                        Featured
                      </p>
                      <ul role="list" aria-labelledby="mobile-featured-heading-1" className="mt-6 space-y-6">
                        <li className="flex">
                          <a href="#" className="text-gray-500">
                            Casual
                          </a>
                        </li>

                        <li className="flex">
                          <a href="#" className="text-gray-500">
                            Boxers
                          </a>
                        </li>

                        <li className="flex">
                          <a href="#" className="text-gray-500">
                            Outdoor
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p id="mobile-categories-heading" className="font-medium text-gray-900">
                        Categories
                      </p>
                      <ul role="list" aria-labelledby="mobile-categories-heading" className="mt-6 space-y-6">
                        <li className="flex">
                          <a href="#" className="text-gray-500">
                            Artwork Tees
                          </a>
                        </li>

                        <li className="flex">
                          <a href="#" className="text-gray-500">
                            Pants
                          </a>
                        </li>

                        <li className="flex">
                          <a href="#" className="text-gray-500">
                            Accessories
                          </a>
                        </li>

                        <li className="flex">
                          <a href="#" className="text-gray-500">
                            Boxers
                          </a>
                        </li>

                        <li className="flex">
                          <a href="#" className="text-gray-500">
                            Basic Tees
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-y-10 gap-x-6">
                    <div>
                      <p id="mobile-collection-heading" className="font-medium text-gray-900">
                        Collection
                      </p>
                      <ul role="list" aria-labelledby="mobile-collection-heading" className="mt-6 space-y-6">
                        <li className="flex">
                          <a href="#" className="text-gray-500">
                            Everything
                          </a>
                        </li>

                        <li className="flex">
                          <a href="#" className="text-gray-500">
                            Core
                          </a>
                        </li>

                        <li className="flex">
                          <a href="#" className="text-gray-500">
                            New Arrivals
                          </a>
                        </li>

                        <li className="flex">
                          <a href="#" className="text-gray-500">
                            Sale
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <p id="mobile-brand-heading" className="font-medium text-gray-900">
                        Brands
                      </p>
                      <ul role="list" aria-labelledby="mobile-brand-heading" className="mt-6 space-y-6">
                        <li className="flex">
                          <a href="#" className="text-gray-500">
                            Significant Other
                          </a>
                        </li>

                        <li className="flex">
                          <a href="#" className="text-gray-500">
                            My Way
                          </a>
                        </li>

                        <li className="flex">
                          <a href="#" className="text-gray-500">
                            Counterfeit
                          </a>
                        </li>

                        <li className="flex">
                          <a href="#" className="text-gray-500">
                            Re-Arranged
                          </a>
                        </li>

                        <li className="flex">
                          <a href="#" className="text-gray-500">
                            Full Nelson
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 py-6 px-4 space-y-6">
              <div className="flow-root">
                <a href="#" className="-m-2 p-2 block font-medium text-gray-900">Company</a>
              </div>

              <div className="flow-root">
                <a href="#" className="-m-2 p-2 block font-medium text-gray-900">Stores</a>
              </div>
            </div>

            <div className="border-t border-gray-200 py-6 px-4 space-y-6">
              <div className="flow-root">
                <Link to="/crear-cuenta" className="-m-2 p-2 block font-medium text-gray-900">Create an account</Link>
              </div>
              <div className="flow-root">
                <Link to="/iniciar-sesion" className="-m-2 p-2 block font-medium text-gray-900">Sign in</Link>
              </div>
            </div>

            <div className="border-t border-gray-200 py-6 px-4 space-y-6">
               <!-- Currency selector --> 
              <form>
                <div className="inline-block">
                  <label htmlFor="mobile-currency" className="sr-only">Currency</label>
                  <div className="-ml-2 group relative border-transparent rounded-md focus-within:ring-2 focus-within:ring-white">
                    <select id="mobile-currency" name="currency" className="bg-none border-transparent rounded-md py-0.5 pl-2 pr-5 flex items-center text-sm font-medium text-gray-700 group-hover:text-gray-800 focus:outline-none focus:ring-0 focus:border-transparent">
                      <option>CAD</option>

                      <option>USD</option>

                      <option>AUD</option>

                      <option>EUR</option>

                      <option>GBP</option>
                    </select>
                    <div className="absolute right-0 inset-y-0 flex items-center pointer-events-none">
                      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" className="w-5 h-5 text-gray-500">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 8l4 4 4-4" />
                      </svg>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div> */}
        </div>



        <main>
          {/* <!-- Hero --> */}
          <div className="flex flex-col border-b border-gray-200 lg:border-0">
            <nav aria-label="Offers" className="order-last lg:order-first">
              <div className="max-w-7xl mx-auto lg:px-8">
                <ul role="list" className="grid grid-cols-1 divide-y divide-gray-200 lg:grid-cols-3 lg:divide-y-0 lg:divide-x">
                  <li className="flex flex-col">
                    <a href="#" className="relative flex-1 flex flex-col justify-center bg-white py-6 px-4 text-center focus:z-10">
                      <p className="text-sm text-gray-500">
                        Download the app
                      </p>
                      <p className="font-semibold text-gray-900">
                        Get an exclusive $5 off code
                      </p>
                    </a>
                  </li>

                  <li className="flex flex-col">
                    <a href="#" className="relative flex-1 flex flex-col justify-center bg-white py-6 px-4 text-center focus:z-10">
                      <p className="text-sm text-gray-500">
                        Return when you&#039;re ready
                      </p>
                      <p className="font-semibold text-gray-900">
                        60 days of free returns
                      </p>
                    </a>
                  </li>

                  <li className="flex flex-col">
                    <a href="#" className="relative flex-1 flex flex-col justify-center bg-white py-6 px-4 text-center focus:z-10">
                      <p className="text-sm text-gray-500">
                        Sign up for our newsletter
                      </p>
                      <p className="font-semibold text-gray-900">
                        15% off your first order
                      </p>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>

            <div className="relative">
              <div aria-hidden="true" className="hidden absolute w-1/2 h-full bg-gray-100 lg:block"></div>
              <div className="relative bg-gray-100 lg:bg-transparent">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-2">
                  <div className="max-w-2xl mx-auto py-24 lg:py-64 lg:max-w-none">
                    <div className="lg:pr-16">
                      <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl xl:text-6xl">Focus on what matters</h1>
                      <p className="mt-4 text-xl text-gray-600">All the charts, datepickers, and notifications in the world can't beat checking off some items on a paper card.</p>
                      <div className="mt-6">
                        <a href="#" className="inline-block bg-indigo-600 border border-transparent py-3 px-8 rounded-md font-medium text-white hover:bg-indigo-700">Shop Productivity</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-48 sm:h-64 lg:absolute lg:top-0 lg:right-0 lg:w-1/2 lg:h-full">
                <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-hero-half-width.jpg" alt="" className="w-full h-full object-center object-cover" />
              </div>
            </div>
          </div>

          {/* <!-- Trending products --> */}
          <section aria-labelledby="trending-heading" className="bg-white">
            <div className="py-16 sm:py-24 lg:max-w-7xl lg:mx-auto lg:py-32 lg:px-8">
              <div className="px-4 flex items-center justify-between sm:px-6 lg:px-0">
                <h2 id="trending-heading" className="text-2xl font-extrabold tracking-tight text-gray-900">Trending products</h2>
                <a href="#" className="hidden sm:block text-sm font-semibold text-indigo-600 hover:text-indigo-500">See everything<span aria-hidden="true"> &rarr;</span></a>
              </div>

              <div className="mt-8 relative">
                <div className="relative w-full overflow-x-auto">
                  <ul role="list" className="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:space-x-0 lg:grid lg:grid-cols-4 lg:gap-x-8">
                    <li className="w-64 inline-flex flex-col text-center lg:w-auto">
                      <div className="group relative">
                        <div className="w-full bg-gray-200 rounded-md overflow-hidden aspect-w-1 aspect-h-1">
                          <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg" alt="Black machined steel pen with hexagonal grip and small white logo at top." className="w-full h-full object-center object-cover group-hover:opacity-75" />
                        </div>
                        <div className="mt-6">
                          <p className="text-sm text-gray-500">
                            Black
                          </p>
                          <h3 className="mt-1 font-semibold text-gray-900">
                            <a href="#">
                              <span className="absolute inset-0"></span>
                              Machined Pen
                            </a>
                          </h3>
                          <p className="mt-1 text-gray-900">
                            $35
                          </p>
                        </div>
                      </div>

                      <h4 className="sr-only">Available colors</h4>
                      <ul role="list" className="mt-auto pt-6 flex items-center justify-center space-x-3">
                        <li className="w-4 h-4 rounded-full border border-black border-opacity-10" style={{ backgroundColor: "#111827" }}>
                          <span className="sr-only">
                            Black
                          </span>
                        </li>

                        <li className="w-4 h-4 rounded-full border border-black border-opacity-10" style={{ backgroundColor: "#fde68a" }}>
                          <span className="sr-only">
                            Brass
                          </span>
                        </li>

                        <li className="w-4 h-4 rounded-full border border-black border-opacity-10" style={{ backgroundColor: "#e5e7eb" }}>
                          <span className="sr-only">
                            Chrome
                          </span>
                        </li>
                      </ul>
                    </li>

                    {/* <!-- More products... --> */}
                  </ul>
                </div>
              </div>

              <div className="mt-12 px-4 sm:hidden">
                <a href="#" className="text-sm font-semibold text-indigo-600 hover:text-indigo-500">See everything<span aria-hidden="true"> &rarr;</span></a>
              </div>
            </div>
          </section>

          {/* <!-- Collections --> */}
          <section aria-labelledby="collections-heading" className="bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
                <h2 id="collections-heading" className="text-2xl font-extrabold text-gray-900">Collections</h2>

                <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
                  <div className="group relative">
                    <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                      <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." className="w-full h-full object-center object-cover" />
                    </div>
                    <h3 className="mt-6 text-sm text-gray-500">
                      <a href="#">
                        <span className="absolute inset-0"></span>
                        Desk and Office
                      </a>
                    </h3>
                    <p className="text-base font-semibold text-gray-900">Work from home accessories</p>
                  </div>

                  <div className="group relative">
                    <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                      <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg" alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant." className="w-full h-full object-center object-cover" />
                    </div>
                    <h3 className="mt-6 text-sm text-gray-500">
                      <a href="#">
                        <span className="absolute inset-0"></span>
                        Self-Improvement
                      </a>
                    </h3>
                    <p className="text-base font-semibold text-gray-900">Journals and note-taking</p>
                  </div>

                  <div className="group relative">
                    <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                      <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg" alt="Collection of four insulated travel bottles on wooden shelf." className="w-full h-full object-center object-cover" />
                    </div>
                    <h3 className="mt-6 text-sm text-gray-500">
                      <a href="#">
                        <span className="absolute inset-0"></span>
                        Travel
                      </a>
                    </h3>
                    <p className="text-base font-semibold text-gray-900">Daily commute essentials</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <!-- Sale and testimonials --> */}
          <div className="relative overflow-hidden">
            {/* <!-- Decorative background image and gradient --> */}
            <div aria-hidden="true" className="absolute inset-0">
              <div className="absolute inset-0 max-w-7xl mx-auto overflow-hidden xl:px-8">
                <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-sale-full-width.jpg" alt="" className="w-full h-full object-center object-cover" />
              </div>
              <div className="absolute inset-0 bg-white bg-opacity-75"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white"></div>
            </div>

            {/* <!-- Sale --> */}
            <section aria-labelledby="sale-heading" className="relative max-w-7xl mx-auto pt-32 px-4 flex flex-col items-center text-center sm:px-6 lg:px-8">
              <div className="max-w-2xl mx-auto lg:max-w-none">
                <h2 id="sale-heading" className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                  Get 25% off during our one-time sale
                </h2>
                <p className="mt-4 max-w-xl mx-auto text-xl text-gray-600">Most of our products are limited releases that won't come back. Get your favorite items while they're in stock.</p>
                <a href="#" className="mt-6 inline-block w-full bg-gray-900 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-gray-800 sm:w-auto">Get access to our one-time sale</a>
              </div>
            </section>

            {/* <!-- Testimonials --> */}
            <section aria-labelledby="testimonial-heading" className="relative py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:py-32 lg:px-8">
              <div className="max-w-2xl mx-auto lg:max-w-none">
                <h2 id="testimonial-heading" className="text-2xl font-extrabold tracking-tight text-gray-900">What are people saying?</h2>

                <div className="mt-16 space-y-16 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
                  <blockquote className="sm:flex lg:block">
                    <svg width="24" height="18" viewBox="0 0 24 18" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="flex-shrink-0 text-gray-300">
                      <path d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z" fill="currentColor" />
                    </svg>
                    <div className="mt-8 sm:mt-0 sm:ml-6 lg:mt-10 lg:ml-0">
                      <p className="text-lg text-gray-600">
                        My order arrived super quickly. The product is even better than I hoped it would be. Very happy customer over here!
                      </p>
                      <cite className="mt-4 block font-semibold not-italic text-gray-900">
                        Sarah Peters, New Orleans
                      </cite>
                    </div>
                  </blockquote>

                  <blockquote className="sm:flex lg:block">
                    <svg width="24" height="18" viewBox="0 0 24 18" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="flex-shrink-0 text-gray-300">
                      <path d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z" fill="currentColor" />
                    </svg>
                    <div className="mt-8 sm:mt-0 sm:ml-6 lg:mt-10 lg:ml-0">
                      <p className="text-lg text-gray-600">
                        I had to return a purchase that didn’t fit. The whole process was so simple that I ended up ordering two new items!
                      </p>
                      <cite className="mt-4 block font-semibold not-italic text-gray-900">
                        Kelly McPherson, Chicago
                      </cite>
                    </div>
                  </blockquote>

                  <blockquote className="sm:flex lg:block">
                    <svg width="24" height="18" viewBox="0 0 24 18" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="flex-shrink-0 text-gray-300">
                      <path d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z" fill="currentColor" />
                    </svg>
                    <div className="mt-8 sm:mt-0 sm:ml-6 lg:mt-10 lg:ml-0">
                      <p className="text-lg text-gray-600">
                        Now that I’m on holiday for the summer, I’ll probably order a few more shirts. It’s just so convenient, and I know the quality will always be there.
                      </p>
                      <cite className="mt-4 block font-semibold not-italic text-gray-900">
                        Chris Paul, Phoenix
                      </cite>
                    </div>
                  </blockquote>
                </div>
              </div>
            </section>
          </div>
        </main>

        <footer aria-labelledby="footer-heading" className="bg-white">
          <h2 id="footer-heading" className="sr-only">Footer</h2>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border-t border-gray-200">
              <div className="pt-16 pb-20">
                <div className="md:flex md:justify-center">
                  <img src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600" alt="" className="h-8 w-auto" />
                </div>
                <div className="mt-16 max-w-5xl mx-auto xl:grid xl:grid-cols-2 xl:gap-8">
                  <div className="grid grid-cols-2 gap-8 xl:col-span-2">
                    <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
                      <div>
                        <h3 className="text-sm font-medium text-gray-900">
                          Products
                        </h3>
                        <ul role="list" className="mt-6 space-y-6">
                          <li className="text-sm">
                            <a href="#" className="text-gray-500 hover:text-gray-600">
                              Bags
                            </a>
                          </li>

                          <li className="text-sm">
                            <a href="#" className="text-gray-500 hover:text-gray-600">
                              Tees
                            </a>
                          </li>

                          <li className="text-sm">
                            <a href="#" className="text-gray-500 hover:text-gray-600">
                              Objects
                            </a>
                          </li>

                          <li className="text-sm">
                            <a href="#" className="text-gray-500 hover:text-gray-600">
                              Home Goods
                            </a>
                          </li>

                          <li className="text-sm">
                            <a href="#" className="text-gray-500 hover:text-gray-600">
                              Accessories
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-900">
                          Customer Service
                        </h3>
                        <ul role="list" className="mt-6 space-y-6">
                          <li className="text-sm">
                            <a href="#" className="text-gray-500 hover:text-gray-600">
                              Contact
                            </a>
                          </li>

                          <li className="text-sm">
                            <a href="#" className="text-gray-500 hover:text-gray-600">
                              Shipping
                            </a>
                          </li>

                          <li className="text-sm">
                            <a href="#" className="text-gray-500 hover:text-gray-600">
                              Returns
                            </a>
                          </li>

                          <li className="text-sm">
                            <a href="#" className="text-gray-500 hover:text-gray-600">
                              Warranty
                            </a>
                          </li>

                          <li className="text-sm">
                            <a href="#" className="text-gray-500 hover:text-gray-600">
                              Secure Payments
                            </a>
                          </li>

                          <li className="text-sm">
                            <a href="#" className="text-gray-500 hover:text-gray-600">
                              FAQ
                            </a>
                          </li>

                          <li className="text-sm">
                            <a href="#" className="text-gray-500 hover:text-gray-600">
                              Find a store
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
                      <div>
                        <h3 className="text-sm font-medium text-gray-900">
                          Company
                        </h3>
                        <ul role="list" className="mt-6 space-y-6">
                          <li className="text-sm">
                            <a href="#" className="text-gray-500 hover:text-gray-600">
                              Who we are
                            </a>
                          </li>

                          <li className="text-sm">
                            <a href="#" className="text-gray-500 hover:text-gray-600">
                              Sustainability
                            </a>
                          </li>

                          <li className="text-sm">
                            <a href="#" className="text-gray-500 hover:text-gray-600">
                              Press
                            </a>
                          </li>

                          <li className="text-sm">
                            <a href="#" className="text-gray-500 hover:text-gray-600">
                              Careers
                            </a>
                          </li>

                          <li className="text-sm">
                            <a href="#" className="text-gray-500 hover:text-gray-600">
                              Terms &amp; Conditions
                            </a>
                          </li>

                          <li className="text-sm">
                            <a href="#" className="text-gray-500 hover:text-gray-600">
                              Privacy
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-900">
                          Legal
                        </h3>
                        <ul role="list" className="mt-6 space-y-6">
                          <li className="text-sm">
                            <a href="#" className="text-gray-500 hover:text-gray-600">
                              Terms of Service
                            </a>
                          </li>

                          <li className="text-sm">
                            <a href="#" className="text-gray-500 hover:text-gray-600">
                              Return Policy
                            </a>
                          </li>

                          <li className="text-sm">
                            <a href="#" className="text-gray-500 hover:text-gray-600">
                              Privacy Policy
                            </a>
                          </li>

                          <li className="text-sm">
                            <a href="#" className="text-gray-500 hover:text-gray-600">
                              Shipping Policy
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:grid lg:grid-cols-2 lg:gap-x-6 xl:gap-x-8">
                <div className="bg-gray-100 rounded-lg p-6 flex items-center sm:p-10">
                  <div className="max-w-sm mx-auto">
                    <h3 className="font-semibold text-gray-900">Sign up for our newsletter</h3>
                    <p className="mt-2 text-sm text-gray-500">The latest news, articles, and resources, sent to your inbox weekly.</p>
                    <form className="mt-4 sm:mt-6 sm:flex">
                      <label htmlFor="email-address" className="sr-only">Email address</label>
                      <input id="email-address" type="text" autoComplete="email" required className="appearance-none min-w-0 w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                      <div className="mt-3 sm:flex-shrink-0 sm:mt-0 sm:ml-4">
                        <button type="submit" className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-indigo-500">
                          Sign up
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="mt-6 relative py-12 px-6 flex items-center sm:py-16 sm:px-10 lg:mt-0">
                  <div className="absolute inset-0 rounded-lg overflow-hidden">
                    <img src="https://tailwindui.com/img/ecommerce-images/footer-02-exclusive-sale.jpg" alt="" className="w-full h-full filter saturate-0 object-center object-cover" />
                    <div className="absolute inset-0 bg-indigo-600 bg-opacity-90"></div>
                  </div>
                  <div className="relative max-w-sm mx-auto text-center">
                    <h3 className="text-2xl font-extrabold tracking-tight text-white">Get early access</h3>
                    <p className="mt-2 text-gray-200">
                      Did you sign up to the newsletter? If so, use the keyword we sent you to get access. <a href="#" className="font-bold text-white whitespace-nowrap hover:text-gray-200">Go now<span aria-hidden="true"> &rarr;</span></a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="py-10 md:flex md:items-center md:justify-between">
              <div className="text-center md:text-left">
                <p className="text-sm text-gray-500">&copy; 2021 All Rights Reserved</p>
              </div>

              <div className="mt-4 flex items-center justify-center md:mt-0">
                <div className="flex space-x-8">
                  <a href="#" className="text-sm text-gray-500 hover:text-gray-600">
                    Accessibility
                  </a>

                  <a href="#" className="text-sm text-gray-500 hover:text-gray-600">
                    Privacy
                  </a>

                  <a href="#" className="text-sm text-gray-500 hover:text-gray-600">
                    Terms
                  </a>
                </div>

                <div className="ml-6 border-l border-gray-200 pl-6">
                  <a href="#" className="flex items-center text-gray-500 hover:text-gray-600">
                    <img src="https://tailwindui.com/img/flags/flag-canada.svg" alt="" className="w-5 h-auto flex-shrink-0" />
                    <span className="ml-3 text-sm">
                      Change
                    </span>
                    <span className="sr-only">location and currency</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Home
