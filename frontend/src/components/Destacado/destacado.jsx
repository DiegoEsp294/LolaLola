import React from 'react';
import CuerpoImagen from "../CuerpoImagen/cuerpoImagen";

const Destacado = ({data,formatoImg,handleShow}) => {
  return (
    <div>
      <tabla >
        <h4 className="tabla1">DESTACADO</h4>
      </tabla>
       <div>
        <CuerpoImagen
          data = {data}
          formatoImg = {formatoImg}
          handleShow = {handleShow}
        />
      </div>
    </div>
  );
}

export default Destacado;