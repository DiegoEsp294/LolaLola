import React from 'react';
import CuerpoImagen from "../CuerpoImagen/cuerpoImagen";

const Oferta = ({data,formatoImg,handleShow}) => {
  return (
    <div>
      <tabla >
        <h4 className="tabla1">OFERTA</h4>
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

export default Oferta;