import React, { useState, useContext } from 'react';

import EquipContext from '../../context/Equipment/EquipContext';

function CreateEquipment() {

  // Importar el contexto
  const ctxEquipment = useContext(EquipContext);
  // console.log(ctxEquipment);
  const { createEquipment } = ctxEquipment

  // Estado local
  const [newEquipment, setNewEquipment] = useState({
    name: "",
    model: "",
    serialNum: 0,
    calibrated: false,
    lastCalibrated: "",
    description: "",
    category: "",
  })

  // Funciones de estado local

  const handleInputs = (event) => {
    event.preventDefault();

    setNewEquipment({
      ...newEquipment,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    createEquipment(newEquipment);

    setNewEquipment({
      name: "",
      model: "",
      serialNum: 0,
      calibrated: false,
      lastCalibrated: "",
      description: "",
      category: "",
    })
  }


  return (

    <main className="mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="h-1/2 bg-gray-100"></div>
          <div>
            <form onSubmit={(e) => { handleSubmit(e) }} className="space-y-8">
              <div className="space-y-8">

                <div className="pt-8">
                  <div>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Crea un equipo. Especifica si es para VENTA o RENTA.
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Llena este formulario y aparecerá en la sección de equipos y en tu perfil de ADMIN.
                    </p>
                  </div>
                  <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label for="create-name" className="block text-sm font-medium text-gray-700" >
                        Nombre del equipo.
                      </label>
                      <div className="mt-1">
                        <input
                          id="create-name"
                          type="text"
                          value={newEquipment.name}
                          name="name"
                          onChange={(e) => { handleInputs(e) }}
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
                          value={newEquipment.model}
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
                          value={newEquipment.serialNum}
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
                          value={newEquipment.category}
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
                          value={newEquipment.calibrated}
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
                          value={newEquipment.lastCalibrated}
                          name="lastCalibrated"
                          onChange={(e) => { handleInputs(e) }}
                          className="p-1 border border-gray shadow-sm px-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent block w-full pr-6 sm:text-sm border-gray-300"></input>
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
                          value={newEquipment.description}
                          name="description"
                          onChange={(e) => { handleInputs(e) }}
                          className="p-1 border border-gray shadow-sm px-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent block w-full pr-6 sm:text-sm border-gray-300"></textarea>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              <div className="pt-5">
                <div className="flex justify-start">
                  <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-blue-500 hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Guardar cambios
                  </button>
                </div>
              </div>
            </form>
          </div>

        </div>
      </div>
    </main>
  )
}

export default CreateEquipment
