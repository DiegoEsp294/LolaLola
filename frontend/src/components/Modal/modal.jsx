import React from 'react';
import { Modal } from 'react-bootstrap';

  const AgregarModal = ({show,onHide,index,handleNext,handlePrevious,id,tamaño}) => {
    return (

       <div>
         <Modal show={show} onHide={onHide}>
             <Modal.Header closeButton>
                <Modal.Title> </Modal.Title>
             </Modal.Header>
             <Modal.Body>
                <div>
                  <div class="text-center">
                    <img className="border" width="80%" height="80%" src={"./img/"+id+".jpg"}/>
                  </div>
                  <button className="float-left previous round " onClick={() => handlePrevious(index)}>&#8249;
                  </button>
                  <button className=" float-right next round " onClick={() => handleNext(index)}>&#8250;
                  </button>
                </div>
                  <div class="text-center">
                <a1> {index+1} de {tamaño} </a1>
                </div>
             </Modal.Body>
         </Modal>
       </div>
    );
  }

export default AgregarModal;
