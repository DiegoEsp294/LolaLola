import React from 'react';

  const CuerpoImagen = ({data,formatoImg,handleShow}) => {
    return (
      <div>
        <table className="row">
            {data.map((item,index) => (
            <td className ="col-lg-3">
              <span>
                {item.VistaPrevia == 'Si' ? (
                  <div>
                    <button
                    onClick={() => handleShow(item,data)}
                    className=" btn-light buttonImg"
                    > 
                    <img width="60%" height="60%" src={"./img/"+item.Auto_increment_id+formatoImg}/>
                    <div><p1>{item.Nombre}</p1></div>
                    <div><p1>Artículo: {item.Numero_articulo}</p1> </div>
                    <div><p1>Marca: {item.Marca}  </p1></div>
                    <p3><a1 className="text-success">$ {item.Precio}</a1></p3>
                    <p></p>
                    </button>
                    <a href="https://www.facebook.com/messages/t/100021166022583">
                    <button type="button" className="p-1 mb-2 bg-success text-white">
                        <a5>CONSULTAR</a5>
                    </button>
                    </a>
                  </div>
                ) : (
                  <div></div>
                )

                }
              </span>
            </td>
            ))}
        </table>
      </div>
    );
  }

export default CuerpoImagen;