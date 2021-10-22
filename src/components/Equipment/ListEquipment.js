import Swal from "sweetalert2";

import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import EquipContext from '../../context/Equipment/EquipContext';
import CartContext from '../../context/Cart/CartContext';
import UsersContext from '../../context/Users/UsersContext';

function ListEquipment() {

  // Importar el contexto
  const ctxEquipment = useContext(EquipContext);
  const { equipment, getAllEquipment, deleteEquipment } = ctxEquipment;

  const ctxCart = useContext(CartContext);
  const { cart, addProduct } = ctxCart;

  const ctxUser = useContext(UsersContext);
  const { user, authStatus } = ctxUser;

  useEffect(() => {

    getAllEquipment();

  }, []);

  // console.log(equipment);

  const auxAddProduct = (event, e) => {
    event.preventDefault();
    if (!cart.cartItems.find(item => item._id === e._id)) {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Producto agregado al carrito',
        showConfirmButton: false,
        timer: 1500
      })
    }
    addProduct(e);
  }

  const auxDeleteEquipment = (event, e) => {
    event.preventDefault();

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: true,
    })

    swalWithBootstrapButtons.fire({
      title: '¿Estás seguro de que quieres borrarlo?',
      text: "No lo podrás recuperar de nuevo.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true,
      buttonsStyling: true,
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        deleteEquipment({ id: e._id });

      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'

        )
      }
    })

  }

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-8 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-xl font-bold text-gray-900">Customers also bought</h2>

        <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">


          {/* <!-- More products... --> */}
          {equipment.map((e) => {
            return (
              <div>
                <div className="relative">
                  <Link to={`/detalles-equipo/${e._id}`}>
                    <div className="relative w-full h-72 rounded-lg overflow-hidden">
                      <img src={e.imageUrl} alt={e.imageUrl} className="w-full h-full object-center object-scale-down" />

                    </div>
                    <div className="relative mt-4">
                      <h3 className="text-sm font-medium text-gray-900">{e.name}</h3>
                      <p className="mt-1 text-sm text-gray-500">{e.model}</p>
                      {
                        (e.category === "rent") ?
                          <p className="mt-1 text-sm text-gray-500">Equipo en Renta</p>
                          :
                          (e.category === "sale") ?
                            <p className="mt-1 text-sm text-gray-500">Equipo en Venta</p>
                            :
                            null
                      }
                    </div>
                    <div className="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden">
                      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"></div>
                      <p className="relative text-lg font-semibold text-white">${e.price}</p>
                    </div>
                  </Link>
                </div>
                <div className="mt-6">
                  {

                    (user.rol === 0 && authStatus) ?
                      <button type="submit" className="relative flex bg-red-400 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-semibold text-red-900 hover:bg-red-200 sm:w-full"
                        onClick={(event) => { auxDeleteEquipment(event, e) }}
                      >Eliminar<span className="sr-only">, {e.name}</span></button>
                      :
                      <button onClick={(event) => { auxAddProduct(event, e) }} className="relative flex bg-gray-100 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-200 sm:w-full">Add to Cart<span className="sr-only">, {e.name}</span></button>
                  }
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
