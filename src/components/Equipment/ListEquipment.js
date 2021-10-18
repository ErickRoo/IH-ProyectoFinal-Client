import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import EquipContext from '../context/Equipment/EquipContext'

function ListEquipment() {

  // Importar el contexto
  const ctxEquipment = useContext(EquipContext);
  const { equipment, getAllEquipment } = ctxEquipment;

  useEffect(() => {

    getAllEquipment();

  }, [])

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-xl font-bold text-gray-900">Customers also bought</h2>

        <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">

          <div>
            <div className="relative group">
              <div className="relative w-full h-72 rounded-lg overflow-hidden">
                <img src="https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg" alt="Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls." className="w-full h-full object-center object-cover" />

              </div>
              <div className="relative mt-4">
                <h3 className="text-sm font-medium text-gray-900">Zip Tote Basket</h3>
                <p className="mt-1 text-sm text-gray-500">White and black</p>
              </div>
              <div className="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden">
                <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"></div>
                <p className="relative text-lg font-semibold text-white">$140</p>
              </div>
            </div>
            <div className="mt-6">
              <a href="#" className="relative flex bg-gray-100 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-200">Add to bag<span className="sr-only">, Zip Tote Basket</span></a>
            </div>
          </div>

          {/* <!-- More products... --> */}
          {equipment.map((e) => {
            return (
              <div>
                <div className="relative">
                  <Link to={`/detalles-equipo/${e._id}`}>
                    <div className="relative w-full h-72 rounded-lg overflow-hidden">
                      <img src="https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg" alt="Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls." className="w-full h-full object-center object-cover" />

                    </div>
                    <div className="relative mt-4">
                      <h3 className="text-sm font-medium text-gray-900">{e.name}</h3>
                      <p className="mt-1 text-sm text-gray-500">{e.model}</p>
                    </div>
                    <div className="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden">
                      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"></div>
                      <p className="relative text-lg font-semibold text-white">${e.serialNum}</p>
                    </div>
                  </Link>
                </div>
                <div className="mt-6">
                  <a href="#" className="relative flex bg-gray-100 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-200">Add to Cart<span className="sr-only">, {e.name}</span></a>
                </div>
              </div>
            )
          })}

        </div>
      </div>
    </div>
  )
}

export default ListEquipment
