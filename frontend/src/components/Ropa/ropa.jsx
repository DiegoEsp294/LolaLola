import React from 'react';
import CuerpoImagen from "../CuerpoImagen/cuerpoImagen";
import MenuRopa from "../Ropa/menuRopa";


  const Ropa = ({data,formatoImg,handleShow,prenda,handlePrenda}) => {
    return (
      <div>
        <tabla >
          <h4 className="tabla1">ROPA</h4>
        </tabla>
         <div>
          <div class="text-center">
              <div className="row" >
                  <button 
                      class="buttonRopa" 
                      class="btn btn-outline-warning btn-lg btn-block"
                      onClick={() => handlePrenda('Remera')}
                      >
                      REMERA
                  </button>
              </div>
              <div className="row" >
                  <button 
                      class="buttonRopa" 
                      class="btn btn-outline-warning btn-lg btn-block"
                      onClick={() => handlePrenda('Pantalon')}
                      >
                      PANTALON
                  </button>
              </div>
              <div className="row" >
                  <button 
                      class="buttonRopa" 
                      class="btn btn-outline-warning btn-lg btn-block"
                      onClick={() => handlePrenda('Zapatilla')}
                      >
                      ZAPATILLA
                  </button>
              </div>
          </div>
          <div>
            <span>
              {prenda=='Remera' ? (
                <div>
                  <CuerpoImagen
                    data = {data}
                    formatoImg = {formatoImg}
                    handleShow = {handleShow}
                  />
                </div>
              ) : (
                prenda=='Pantalon ' ? (
                <div>
                  <CuerpoImagen
                    data = {data}
                    formatoImg = {formatoImg}
                    handleShow = {handleShow}
                  />
                </div>
              ) : (
                <div>
                  <CuerpoImagen
                    data = {data}
                    formatoImg = {formatoImg}
                    handleShow = {handleShow}
                  />
                </div>
              )
            )}
            </span>
          </div>
        </div>
      </div>
    );
  }

export default Ropa;