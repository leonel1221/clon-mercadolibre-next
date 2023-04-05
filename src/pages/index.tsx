import Link from "next/link";


const indexPage = ()=>{
  return (
    <div>
      <header role="banner" data-siteid="MCO" className="nav-header nav-header-plus ui-navigation-v2">
        <div className="nav-bounds nav-bounds-with-cart nav-bounds-with-cp">
          <div className="nav-header-plus-logo nav-area nav-top-area nav-left-area margen-logo">
            <a className="nav-logo"><img src="media\image\LogoML.svg"/>Mercado Libre Colombia - Donde comprar y vender de todo</a>
          </div>

          <div className="nav-area nav-top-area nav-center-area">
            <form className="nav-search"  role="search" style="display: inherit;">
              <label className="nav-header-visually-hidden" for="nav-search-input">Ingresa lo que quieras encontrar</label>
              <input type="text" className="nav-search-input" id="cb1-edit" aria-label="Ingresa lo que quieras encontrar" name="as_word" placeholder="Buscar productos, marcas y más…" maxlength="120" autocapitalize="off" autocorrect="off" spellcheck="false" autocomplete="off" value="" aria-activedescendant="" aria-controls="cb1-list" aria-autocomplete="list" aria-expanded="false" role="combobox"/>
              <button type="submit" className="nav-search-btn">
                <div role="img" aria-label="Buscar" className="nav-icon-search"></div>
              </button>
            </form>
          </div>

          <div className="margen1">
            <span>Ingresa tu domicilio</span>
          </div>

          <div className="margen1 organization">
            <div>
              <span>Categoría</span>
              <img src="media\image\pseudocategoriasheader.svg"/>
            </div>
            <div><span>Oferta</span></div>
            <div><span>Historial</span></div>
            <div><span>Supermercado</span></div>
            <div><span>Moda</span></div>
            <div><span>Vender</span></div>
            <div><span>Ayuda/PQR</span></div>
          </div>

          <div className=" conte-creatucuenta margen2 ">
            <span>Crea tu cuenta Ingresa Mis Compras</span>
          </div>
        </div>
      </header>
      <main className="contenedor-main">

      </main>
      <footer className="footer-pp">
        <div className="footer1">
          <div>
            <ul className="ulfooter1">
              <span className="trabajaconnosotros">Trabaja con nosotros</span>
              <span className="terminosycondi">Términos y condiciones</span>
              <span className="conciudadanos">Cómo cuidamos tu privacidad</span>
              <span className="accesibilidad">Accesibilidad</span>
              <span className="ayudaPQR">Ayuda / PQR</span>
              <span className="wwwsic">www.sic.gov.co</span>
            </ul>
            <span className="textulfooter1">Copyright © 1999-2023 MercadoLibre Colombia LTDA.</span>
          </div>
          <span className="textfooter1">Carrera 17 Numero 93 - 09 Piso 3, Bogotá D.C., Colombia</span>
        </div>

        <div className="footer2">
          <img src="media\image\sic.png" />
          <img src="media\image\pum.png" />
        </div>
      </footer>

      

    </div>
  );
};

export default indexPage;
