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

    </div>
  );
};

export default indexPage;
