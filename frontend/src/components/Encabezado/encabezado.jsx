import React from 'react';

  const Encabezado = ({handlebutton}) => {
    return (
      <div>
        <header className="tabla4">
          <p class="text-primary color">
            <img width="200" height="200" src={"./img/"+"lolalola.ico"}/>
          </p>
          <nav>
          <div class="container">
            <div class="row">
              <div class="col text-center">
              <button 
                  class="nav-item"
                  class="nav-link active"
                  type="button" 
                  class="button" 
                  class="btn-lg width"
                  onClick={() => {handlebutton('Inicio')}}
                  >INICIO
                </button>
                <button 
                  type="button" 
                  class="nav-item"
                  class="btn-lg width"
                  onClick={() => {handlebutton('Maquillaje')}}
                  >MAQUILLAJE
                </button>
                <button 
                  type="button" 
                  class="nav-item"
                  class="btn-lg width"
                  onClick={() => {handlebutton('Ropa')}}
                  >ROPA
                </button>
              </div>
            </div>
          </div>
          </nav>
        </header>  
      </div>
    );
  }

export default Encabezado;
