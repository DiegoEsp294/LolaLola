import React from 'react';

  const Footer = ({}) => {
    return (
      <div >
        <footer className="tabla3">
        <p id="copyright">Copyright&copy; 2018 - Lolalola - Yamila Espindola</p>
          <div class="contact">            
            <p class="contact">Contactos</p>
            <a href="https://www.facebook.com/messages/t/100021166022583"> 
              <i class="fab fa-facebook fa-2x fa-lg"></i>
            </a>
            {/* <a href="https://www.twitter.com">
              <i class="fab fa-twitter-square fa-2x fa-lg"></i>
            </a> */}
            <a href="https://www.instagram.com">
              <i class="fab fa-instagram fa-2x fa-lg"></i>
            </a>
          </div>
        </footer>
      </div>
    );
  }

export default Footer;
