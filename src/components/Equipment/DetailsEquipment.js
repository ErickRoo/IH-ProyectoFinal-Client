import axios from "axios";

import React, { useState, useEffect, useContext } from 'react';

import EquipContext from '../../context/Equipment/EquipContext';
import CartContext from '../../context/Cart/CartContext';
import UsersContext from "../../context/Users/UsersContext"

function DetailsEquipment(props) {

  const params = props.match.params.idEquipo;

  // Importar el contexto
  const ctxEquipment = useContext(EquipContext);
  const { equipment, editEquipment } = ctxEquipment;

  const ctxCart = useContext(CartContext);
  const { cart, addProduct } = ctxCart;

  const ctxUser = useContext(UsersContext);
  const { user, authStatus } = ctxUser;

  // Estado local
  const [editEquip, setEditEquip] = useState({
    id: "",
    name: "",
    model: "",
    serialNum: 0,
    calibrated: false,
    lastCalibrated: "",
    description: "",
    category: "",
    price: 0,
    imageUrl: "",
  })

  useEffect(() => {

    const getResponse = async () => {

      const oneEquipment = equipment.find(element => {
        return element._id === params;
      })
      console.log(oneEquipment);
      setEditEquip({
        id: oneEquipment._id,
        name: oneEquipment.name,
        model: oneEquipment.model,
        serialNum: oneEquipment.serialNum,
        calibrated: oneEquipment.calibrated,
        lastCalibrated: oneEquipment.lastCalibrated,
        description: oneEquipment.description,
        category: oneEquipment.category,
        price: oneEquipment.price,
        imageUrl: oneEquipment.imageUrl,
      })
    }

    getResponse();
  }, [])


  const auxAddProduct = (event) => {
    event.preventDefault();

    addProduct(editEquip);
  }

  // Funciones de estado local

  const handleInputs = (event) => {
    event.preventDefault();

    setEditEquip({
      ...editEquip,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    editEquipment(editEquip);
  }

  // UPLOAD imagen
  const uploadImage = async (imageInput) => {
    const imagen = imageInput.target.files;
    const formData = new FormData();
    formData.append("file", imagen[0]);
    formData.append("upload_preset", `${process.env.REACT_APP_UPLOAD_PRESET}`)

    try {
      const axiosCloudinary = await axios.post(`${process.env.REACT_APP_CLOUDINARY_URL_UPLOAD}`, formData)
      console.log(axiosCloudinary);
      const imageUrl = axiosCloudinary.data.secure_url;

      setEditEquip({
        ...editEquip,
        imageUrl: imageUrl,
      })

    } catch (error) {
      console.log(`Hubo un error al cargar imagen: ${error}`);
    }
  }

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
          {/* <!-- Image gallery --> */}
          <div className="flex flex-col-reverse">
            {/* <!-- Image selector --> */}

            <div className="w-full aspect-w-1 aspect-h-1">
              {/* <!-- Tab panel, show/hide based on tab state. --> */}
              <div id="tabs-1-panel-1" aria-labelledby="tabs-1-tab-1" role="tabpanel" tabIndex="0">
                <img src={editEquip.imageUrl} alt={editEquip.imageUrl} className="w-full h-full object-center object-scale-down sm:rounded-lg" />
              </div>

              {/* <!-- More images... --> */}
            </div>
          </div>

          {/* <!-- Product info --> */}

          {
            (authStatus && (user.rol === 0)) ?
              <>
                <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">

                  <form className="mt-6" onSubmit={(e) => { handleSubmit(e) }}>
                    <div className="sm:col-span-3">
                      <label for="create-name" className="block text-sm font-medium text-gray-700" >
                        Nombre del equipo.
                      </label>
                      <div className="mt-1">
                        <input
                          id="create-name"
                          type="text"
                          value={editEquip.name}
                          onChange={(e) => { handleInputs(e) }}
                          name="name"
                          className="p-1 border border-gray shadow-sm px-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent block w-full pr-6 sm:text-sm border-gray-300"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label for="create-model" className="block text-sm font-medium text-gray-700">
                        Modelo:
                      </label>
                      <div className="mt-1">
                        <input
                          id="create-model"
                          type="text"
                          value={editEquip.model}
                          name="model"
                          onChange={(e) => { handleInputs(e) }}
                          className="p-1 border border-gray shadow-sm px-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent block w-full pr-6 sm:text-sm border-gray-300"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label for="create-serialNum" className="block text-sm font-medium text-gray-700">
                        Número de Serie:
                      </label>
                      <div className="mt-1">
                        <input
                          id="create-serialNum"
                          type="text"
                          value={editEquip.serialNum}
                          name="serialNum"
                          onChange={(e) => { handleInputs(e) }} className="p-1 border border-gray shadow-sm px-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent block w-full pr-6 sm:text-sm border-gray-300"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-6">
                      <label for="create-category" className="block text-sm font-medium text-gray-700">
                        Categoría:
                      </label>
                      <div className="mt-1">
                        <select
                          id="create-category"
                          type="text"
                          value={editEquip.category}
                          name="category"
                          onChange={(e) => { handleInputs(e) }}
                          className="p-1 border border-gray shadow-sm px-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent block w-full pr-6 sm:text-sm border-gray-300">
                          <option></option>
                          <option value="sale">Venta</option>
                          <option value="rent">Renta</option>
                        </select>
                      </div>
                    </div>

                    <div className="sm:col-span-6">
                      <label for="create-calibrated" className="block text-sm font-medium text-gray-700">
                        ¿Está calibrado el equipo?
                      </label>

                      <div className="mt-1">
                        <select
                          id="create-calibrated"
                          type="checkbox"
                          name="calibrated"
                          value={editEquip.calibrated}
                          onChange={(e) => { handleInputs(e) }}
                        >
                          <option value="true">Si</option>
                          <option value="false">No</option>
                        </select>
                      </div>
                    </div>

                    <div className="sm:col-span-6">
                      <label for="create-lastCalibrated" className="block text-sm font-medium text-gray-700">
                        Fecha de la última calibración:
                      </label>
                      <div className="mt-1">
                        <input
                          id="create-lastCalibrated"
                          type="date"
                          value={editEquip.lastCalibrated}
                          name="lastCalibrated"
                          onChange={(e) => { handleInputs(e) }}
                          className="p-1 border border-gray shadow-sm px-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent block w-full pr-6 sm:text-sm border-gray-300"></input>
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label for="create-serialNum" className="block text-sm font-medium text-gray-700">
                        Precio:
                      </label>

                      <div className="mt-1">
                        <input
                          id="create-serialNum"
                          type="number"
                          value={editEquip.price}
                          name="price"
                          onChange={(e) => { handleInputs(e) }} className="p-1 border border-gray shadow-sm px-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent block w-full pr-6 sm:text-sm border-gray-300"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-6">
                      <label for="create-description" className="block text-sm font-medium text-gray-700">
                        Descripción o comentarios
                      </label>
                      <div className="mt-1">
                        <textarea
                          id="create-description"
                          type="text"
                          value={editEquip.description}
                          name="description"
                          onChange={(e) => { handleInputs(e) }}
                          className="p-1 border border-gray shadow-sm px-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent block w-full pr-6 sm:text-sm border-gray-300"></textarea>
                      </div>
                    </div>

                    <div className="sm:col-span-6">
                      <label for="create-imagen" className="block text-sm font-medium text-gray-700">
                        Imagen
                      </label>
                      <div className="mt-1">
                        <input
                          id="create-imagen"
                          type="file"
                          value={editEquip.imagenUrl}
                          name="imageUrl"
                          onChange={(e) => { uploadImage(e) }}
                          className="p-1 border border-gray shadow-sm px-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent block w-full pr-6 sm:text-sm border-gray-300"></input>
                      </div>
                    </div>

                    {/* <!-- Reviews --> */}


                    {/* <!-- Colors --> */}

                    <div className="mt-10 flex sm:flex-col1">
                      <button type="submit" className="max-w-xs flex-1 bg-green-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-green-500 sm:w-full">Editar</button>

                      {/* <button type="button" className="ml-4 py-3 px-3 rounded-md flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500">
                          <!-- Heroicon name: outline/heart --> 
                          <svg className="h-6 w-6 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                          <span className="sr-only">Add to favorites</span>
                        </button> */}
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
              <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
                <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{editEquip.name}</h1>

                <div className="mt-3">
                  <h2 className="sr-only">Product information</h2>
                  <p className="text-3xl text-gray-900">${editEquip.price}</p>
                </div>

                {/* <!-- Reviews --> */}

                <div className="mt-6">
                  <h3 className="sr-only">Description</h3>

                  <div className="text-base text-gray-700 space-y-6">
                    <p>{editEquip.description}</p>
                  </div>
                </div>

                <form className="mt-6">
                  {/* <!-- Colors --> */}

                  <div className="mt-10 flex sm:flex-col1">
                    <button onClick={(event) => { auxAddProduct(event) }} className="max-w-xs flex-1 bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 sm:w-full">Add to cart</button>

                    {/* <button type="button" className="ml-4 py-3 px-3 rounded-md flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500">
                       <!-- Heroicon name: outline/heart --> 
                      <svg className="h-6 w-6 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      <span className="sr-only">Add to favorites</span>
                    </button> */}
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
          }
        </div>
      </div>
    </div>
  )
}

export default DetailsEquipment
