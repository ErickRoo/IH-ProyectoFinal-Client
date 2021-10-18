import React, { useContext } from 'react';
import EquipContext from '../context/Equipment/EquipContext';

function DetailsEquipment(props) {

  const params = props.match.params.idEquipo;
  console.log(params);

  // Importar el contexto
  const ctxEquipment = useContext(EquipContext);
  const { equipment } = ctxEquipment;

  console.log(equipment);

  return (
    <div>
      Página de detalles de equipos.
    </div>
  )
}

export default DetailsEquipment
