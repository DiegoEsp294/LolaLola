import React from 'react';

  const MenuRopa = (handlePrenda) => {
    return (
        <div>
        <header >
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
        </header>
      </div>
    );
  }

export default MenuRopa;