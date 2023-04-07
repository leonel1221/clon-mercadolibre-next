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
        <div>
          <div>
            <div className="novedades-principales">
              <a className="aimagennovedades">
                <img src="media\image\imgnovedades.png" />
              </a>
              <ul className="conte-ulnovedades-principales"><img src="media\ulnovedadesprincipales.svg"/></ul>
            </div>
            <div className="beneficios-punto-pp">
                    <div className="benedicios-texto">
                        <span className="texto-beneficios">Beneficios de Mercado Puntos</span>
                        <span className="texto-verbeneficios">Ver todos los beneficios</span>
                    </div>
                    <div className="contenedor-streaming">
                        <div className="streaming-interior">
                            <a className="contenedor-disney">
                                <img src="media\image\imgdisneyanimados.png"/>
                                <div className="cont-comentarios-disney">
                                    <img src="media\image\comboplus.png" />
                                    <div className="difuminado-disney"></div>
                                    <div className="cont-text-disney">
                                        <span className="texto-sincargo">Sin cargo con el nivel 6</span>
                                        <span className="texto-disneystar">Disney+ y Star+</span>
                                    </div>
                                </div>
                            </a>
                            <a className="contenesor-hbo">
                                <img src="media\image\HBOMax_widgetmulti.png"/>
                                <div className="cont-comentarios-hbo">
                                    <img src="media\image\logoSquarehbo.png" />
                                    <div className="difuminado-hbo"></div>
                                    <div className="cont-text-hbo">
                                        <span className="textodiasmas">7 DÍAS GRATIS</span>
                                        <span className="texto-sincargo">Hasta 50% OFF</span>
                                        <span className="texto-hbo">HBO Max</span>
                                    </div>
                                </div>
                            </a>
                            <a className="contenedor-paramount">
                                <img  src="media\image\paramount_widgetmulti.png" />
                                <div className="cont-comentarios-paramout">
                                    <img src="media\image\paramount-logo.png" />
                                    <div className="difuminado-paramount"></div>
                                    <div className="cont-text-paramout">
                                        <span className="textodiasmas">7 DÍAS GRATIS</span>
                                        <span className="texto-sincargo">Hasta 50% OFF</span>
                                        <span className="texto-paramout">Paramount+</span>
                                        
                                    </div>
                                </div>
                            </a>

                        </div>

                    </div>

                </div>
                <div className="descubre-pp">
                    <span className="descubretext">Descubre</span>
                    <div className="descubreinter">
                        <a className="renuevaespacios">
                            <div className="conte-renuevahogar">
                                <span className="text-renueva">RENUEVA TUS ESPACIOS</span>
                                <span className="text-hogarespacios">HOGAR Y MUEBLES</span>
                                <span className="hasta-50off">HASTA 50% OFF</span>
                                <button className="boton-vermas">
                                    <span className="vertext">Vermas</span>
                                </button>
                            </div>
                            <div className="estilo-imghogar"><img src="media\image\artihogar.png" /></div>
                        </a>
                        <a className="suscribete">
                            <div className="conte-plataformas">
                                <span className="suscri-nivel6">SUSCRIBETE AL NIVEL 6</span>
                                <span className="porsolo">POR SOLO</span>
                                <span className="precio-cadames">$17.899 cada mes</span>
                                <button className="boton-suscribirme"><span className="textsucribirme">Suscribirme</span></button>
                            </div>
                            <div className="estilo-imgpla"><img src="media\image\plataformas.png"/></div>
                            
                        </a>
                    </div>
                </div>
                <section className="seccion-pp"> 
                        <div className="caja-tiendas">
                            <div className="seccion-tiendas">
                                    <span className="mejores-tiendas">Las mejores tiendas te esperan</span>
                                    <span className="ver-tiendas">Ver tiendas</span>
                            </div>
                            <div className="caja-tiendas2">
                                 <div className="contenedor-tienda">
                                        <div className="tamaño-home"><img src="media\image\homelego.png" /></div>
                                        <div className="text-tienda">
                                            <span className="style-text-tienda">Lego</span>
                                        </div>
                                        <div className="articulos-tienda">
                                            <a className="articulo-izq"><img src="media\image\moto.png" /></a>
                                            <a className="articulo-centro"><img src="media\image\robot.png" /></a>
                                            <a className="articulo-der"><img src="media\image\auto.png" /></a>
                                        </div>
                                        <div className="logo-tienda">
                                            <img src="media\image\lego.png"/>   
                                        </div>
                                        <span className="vertienda">Ver tienda</span>
                                 </div>
                                 <div className="contenedor-tiendami">
                                    <div className="tamaño-home"><img src="media\image\mihome.png" /></div>
                                    <div className="text-tienda">
                                        <span className="style-text-tienda">Xiaomi</span>
                                    </div>
                                    <div className="articulos-tienda">
                                        <a className="articulo-izq"><img src="media\image\reloj.png" /></a>
                                        <a className="articulo-centro"><img src="media\image\monopatincen.png" /></a>
                                        <a className="articulo-der"><img src="media\image\monopatinder.png" /></a>
                                    </div>
                                    <div className="logo-tienda">
                                        <img src="media\image\mi.png"/>   
                                    </div>
                                    <span className="vertienda">Ver tienda</span>
                                 </div>
                                 <div className="contenedor-tiendaoster">
                                    <div className="tamaño-home"><img src="media\image\osterhome.jpg.png" ></div>
                                    <div className="text-tienda">
                                        <span className="style-text-tienda">Oster</span>
                                    </div>
                                    <div className="articulos-tienda">
                                        <a className="articulo-izq"><img src="media\image\plato.png" ></a>
                                        <a className="articulo-centro"><img src="media\image\vaso.png" ></a>
                                        <a className="articulo-der"><img src="media\image\olla.png" ></a>
                                    </div>
                                    <div className="logo-tienda">
                                        <img src="media\image\oster.png">   
                                    </div>
                                    <span className="vertienda">Ver tienda</span>
                                 </div>
                                 <div className="contenedor-tiendanikon">
                                    <div className="tamaño-home"><img src="media\image\nikonhome.png" /></div>
                                    <div className="text-tienda">
                                        <span className="style-text-tienda">Nikon</span>
                                    </div>
                                    <div className="articulos-tienda">
                                        <a className="articulo-izq"><img src="media\image\cables.png" /></a>
                                        <a className="articulo-centro"><img src="media\image\usb.png" /></a>
                                        <a className="articulo-der"><img src="media\image\cam.png" /></a>
                                    </div>
                                    <div className="logo-tienda">
                                        <img src="media\image\nikon.png"/>   
                                    </div>
                                    <span className="vertienda">Ver tienda</span>
                                 </div>
                            </div>
                        </div>
                </section>
          </div>
        </div>
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
