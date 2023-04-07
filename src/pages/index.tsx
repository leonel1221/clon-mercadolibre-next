import Link from "next/link";


const indexPage = () => {
    return (
        <div>
            <header role="banner" data-siteid="MCO" className="nav-header nav-header-plus ui-navigation-v2">
                <div className="nav-bounds nav-bounds-with-cart nav-bounds-with-cp">
                    <div className="nav-header-plus-logo nav-area nav-top-area nav-left-area margen-logo">
                        <a className="nav-logo"><img src="media\image\LogoML.svg" />Mercado Libre Colombia - Donde comprar y vender de todo</a>
                    </div>

                    <div className="nav-area nav-top-area nav-center-area">
                        <form className="nav-search" role="search" style="display: inherit;">
                            <label className="nav-header-visually-hidden" for="nav-search-input">Ingresa lo que quieras encontrar</label>
                            <input type="text" className="nav-search-input" id="cb1-edit" aria-label="Ingresa lo que quieras encontrar" name="as_word" placeholder="Buscar productos, marcas y más…" maxlength="120" autocapitalize="off" autocorrect="off" spellcheck="false" autocomplete="off" value="" aria-activedescendant="" aria-controls="cb1-list" aria-autocomplete="list" aria-expanded="false" role="combobox" />
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
                            <img src="media\image\pseudocategoriasheader.svg" />
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
                            <ul className="conte-ulnovedades-principales"><img src="media\ulnovedadesprincipales.svg" /></ul>
                        </div>
                        <div className="formas-de-pago">
                            <div className="mediospagos">

                                <div className="cuotas">

                                    <img src="media\image\credit-card.svg" />
                                    <span className="text-num-cuotas">Hasta 48 cuotas</span>
                                    <span className="text-vermas-cuotas">Ver más</span>
                                </div>
                                <div className="transferencias">
                                    <img src="media\transfer.svg" />
                                    <span className="text-transferencia">Transferencia desde tu banco</span>
                                    <span className="text-vermas-transfer">Ver más</span>
                                </div>
                                <div className="pagaefectivo">
                                    <img src="media\payment-agreement.svg" />
                                    <span className="text-pagaefectivo">Paga en efectivo</span>
                                    <span className="text-vermas-pagaefectivo">Ver más</span>
                                </div>
                            </div>
                            <div className="masmediospagos">
                                <img src="media\view-more.svg" />
                                <span className="text-masmedios">Más medios de pago</span>
                                <span className="text-vertodos">Ver todos</span>
                            </div>
                        </div>
                        <div className="ofertas-pp">
                            <div className="ofertas-titulo">
                                <span className="texto-ofertas">Ofertas</span>
                                <span className="texto-vertdas">Ver todas</span>
                            </div>
                            <div className="barra-ofertas">
                                <div className="barra-ofertas-inter">
                                    <div className="contene-silla">
                                        <img src="media\silla.svg" />
                                        <div >
                                            <img src="media\pseudosilla.svg" />

                                        </div>

                                    </div>
                                    <div className="contene-microfono">
                                        <img src="media\microfono.svg" />
                                        <div className="oferta-microfono">
                                            <img src="media\image\pseudomicrofono.png" />
                                            <div className="conten-precio-microfono">
                                                <div className="text-precio-micro">
                                                    <div className="text-preciomicro-inte">
                                                        <span className="simbolo-precio">$</span>
                                                        <span className="estilo-precios-descuento">74.990</span>
                                                    </div>
                                                    <span className="descuesto-off">25% OFF</span>
                                                </div>
                                                <div className="envíogrstis-full">
                                                    <img src="media\fullmicro.svg" />
                                                </div>
                                                <span className="text-eviomicro">Envío gratis</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="contene-afeitadora">
                                        <img src="media\afeitadora.svg" />
                                        <div className="conte-precio-afeita">
                                            <img src="media\image\pseudoafeita.png" />
                                            <div className="contene-precio-afeita">
                                                <div className="text.precio-afeita">
                                                    <img src="media\preciocondescuentoafeitadora.svg" />
                                                </div>
                                                <span className="text-eviomicro">Envío gratis</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="contenedor-armario">
                                        <img src="media\image\armario.svg" />
                                        <div className="conte-precio-armario">
                                            <img src="media\image\pseudoarmario.png" />
                                            <div className="contene-precio-armario">
                                                <div className="text.precio-armario">
                                                    <img src="media\precioarmariodescuento.svg" />
                                                </div>
                                                <span className="text-eviomicro">Envío gratis</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="contenedor-cortinas">
                                        <img src="media\cortinas.svg" />
                                        <div className="conte-oferta-cortinas">
                                            <img src="media\image\pseudocortinas.png" />
                                            <div className="conte-precio-corti">
                                                <div className="text-precio-corti">
                                                    <img src="media\preciocortinasdescuento.svg" />
                                                    <span className="porcentaje-decuentocortinas">17%OFF</span>
                                                </div>
                                                <img className="ico-full" src="media\fullmicro.svg" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sube-al-nivel-pp">
                            <div className="suscribete-nivel-arriba">
                                <span className="texto-sucribete-nivel">Suscríbete al nivel 6</span>
                                <div className="suscribete-precio">
                                    <span className="precio-suscripcion">$50.690</span>

                                    <div className="pseudo-precios">
                                        <svg width="3" height="38" viewBox="0 0 3 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <mask id="path-1-inside-1_1_207" fill="white">
                                                <path d="M0.0625 0.1875H2.0625V37.1875H0.0625V0.1875Z" />
                                            </mask>
                                            <path d="M2.0625 37.1875V0.1875H-1.9375V37.1875H2.0625Z" fill="white" mask="url(#path-1-inside-1_1_207)" />
                                        </svg>
                                    </div>

                                    <span className="precio-mes">
                                        <span className="cont-precio-mes">
                                            <span className="text-precio-mes">$ 17.899</span>
                                        </span>
                                        <span className="mes">/mes</span>
                                    </span>

                                </div>
                            </div>
                            <div className="suscribete-nivel-centro">
                                <span className="consigue-mejores-precios">Consigue los mejores beneficios en Mercado Libre</span>
                                <div className="barra-envios">
                                    <div className="disneysincargo">
                                        <div className="cont-disney-sincargo">
                                            <div className="ldiseyplus">
                                                <img src="media\image\ldplus.png" />
                                            </div>
                                        </div>
                                        <span className="textdisneysincargo">Disney+ sin cargo</span>
                                    </div>
                                    <div className="starsinrecargo">
                                        <div className="conten-star-sinrecargo">
                                            <div className="lstarplus">
                                                <img src="media\image\lstarplus.png" />
                                            </div>
                                        </div>
                                        <span className="textstarsinrecargo">Star+ sin cargo</span>
                                    </div>
                                    <div className="envios-gratis">
                                        <div className="conte-carro-envios">
                                            <img src="media\image\carritoenvios.png" />
                                        </div>
                                        <span className="text-carritoenvios">Envíos gratis y rápidos desde $ 90.000 y 40% OFF en envíos de menos de $ 90.000</span>
                                    </div>
                                </div>
                            </div>
                            <div className="suscribete-nivel-abajo">
                                <button className="boton-suscribete-nivel ">Suscribete</button>
                            </div>
                        </div>
                        <div className="beneficios-punto-pp">
                            <div className="benedicios-texto">
                                <span className="texto-beneficios">Beneficios de Mercado Puntos</span>
                                <span className="texto-verbeneficios">Ver todos los beneficios</span>
                            </div>
                            <div className="contenedor-streaming">
                                <div className="streaming-interior">
                                    <a className="contenedor-disney">
                                        <img src="media\image\imgdisneyanimados.png" />
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
                                        <img src="media\image\HBOMax_widgetmulti.png" />
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
                                        <img src="media\image\paramount_widgetmulti.png" />
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
                                    <div className="estilo-imgpla"><img src="media\image\plataformas.png" /></div>

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
                                            <img src="media\image\lego.png" />
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
                                            <img src="media\image\mi.png" />
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
                                            <img src="media\image\nikon.png" />
                                        </div>
                                        <span className="vertienda">Ver tienda</span>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <h2 className="h-coleccione">
                            <span className="text-colecciones">Colecciones</span>
                            <span>Supermercado</span>
                            <svg width="15" height="24" viewBox="0 0 15 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1_398)">
                                    <path d="M13.7149 8.75L7.44338 15.0065L1.17188 8.75" stroke="#3483FA" stroke-width="1.5" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_398">
                                        <rect width="14" height="24" fill="white" transform="translate(0.671875)" />
                                    </clipPath>
                                </defs>
                            </svg>

                        </h2>
                        <div className="colecciones">

                            <div >
                                <div >
                                    <a >
                                        <div>
                                            <div className="pedigre">
                                                <img src="media\image\pedigre.png" />
                                            </div>
                                            <div className="container-super">
                                                <span className="tex-descubre">
                                                    <h1>DESCUBRE</h1>
                                                </span>
                                                <span className="conta-super-inter">
                                                    <h3 className="tex-super">SUPERMERCADO</h3>
                                                </span>
                                            </div>


                                        </div>
                                    </a>
                                    <div className="colecciones-inter">
                                        <a ><img src="media\image\1.png" /></a>
                                        <a ><img src="media\image\2.png" /></a>
                                        <a ><img src="media\image\3.png" /></a>
                                        <a ><img src="media\image\4.png" /></a>
                                        <a ><img src="media\image\5.png" /></a>
                                        <a ><img src="media\image\6.png" /></a>
                                        <a ><img src="media\image\7.png" /></a>
                                        <a ><img src="media\image\8.png" /></a>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="catego-populares">
                            <span className="categorias-text">Categorias populares</span>
                            <div className="categorias-pp">
                                <div className="contenedor-categorias">
                                    <div className="organization">
                                        <div className="organization1">

                                            <a className="img-organi1">
                                                <span className="style-text-carromoto">Carros, Motos y Otros</span>
                                                <img className="style-ico-carromoto" src="media\carrosmotosyotros.svg" />

                                            </a>

                                            <a className="img-organi2">
                                                <span className="style-text-celutele">Celulares y Teléfonos</span>
                                                <img className="style-ico-celutele" src="media\celulares.svg" />

                                            </a>
                                        </div >
                                        <div className="organization2">
                                            <a className="img-compu">
                                                <span className="style-text-computacion">Computación</span>
                                                <img className="style-ico-compu" src="media\computacion.svg" />
                                            </a>
                                            <a className="img-belleza">
                                                <span className="style-text-belleza">Belleza y Cuidado Personal</span>
                                                <img className="style-ico-belleza" src="media\belleza.svg" />

                                            </a>
                                        </div>
                                        <div className="organization3">
                                            <a className="img-ropa">
                                                <span className="style-text-ropa">Ropa y Accesorios</span>
                                                <img className="style-ico-ropa" src="media\ropa.svg" />
                                            </a>
                                            <a className="img-deporte">
                                                <span className="style-text-deporte">Deportes y Fitness</span>
                                                <img className="style-ico-deporte" src="media\deportes.svg" />

                                            </a>
                                        </div>
                                        <div className="organization4">
                                            <a className="img-sofa">
                                                <span className="style-text-hogar">Hogar y Muebles</span>
                                                <img className="style-ico-hogar" src="media\Hogar.svg" />

                                            </a>
                                            <a className="img-electonica">
                                                <span className="style-text-electronica">Electrónica, Audio y Video</span>
                                                <img className="style-ico-electronica" src="media\electronica.svg" />

                                            </a>
                                        </div>
                                        <div className="organization5">
                                            <a className="img-accesorios">
                                                <span className="style-text-accesorio">Accesorios para Vehículos</span>
                                                <img className="style-ico-accesorio" src="media\accesorios.svg" />

                                            </a>
                                            <a className="img-consola">
                                                <span className="style-text-consola">Consolas y Videojuegos</span>
                                                <img className="style-ico-consola" src="media\consolas.svg" />

                                            </a>
                                        </div>
                                        <div className="organization6">
                                            <a className="img-electrodomesticos">
                                                <span className="style-text-electrodomesticos">Electrodomésticos</span>
                                                <img className="style-ico-electrodomesticos" src="media\electrodomesticos.svg" />

                                            </a>
                                            <a className="img-juegos">
                                                <span className="style-text-juegos">Juegos y Juguetes</span>
                                                <img className="style-ico-juegos" src="media\juegos.svg" />

                                            </a>
                                        </div>
                                        <div className="organization7">
                                            <a className="img-camaras">
                                                <span className="style-text-camaras">Cámaras y Accesorios</span>
                                                <img className="style-ico-camaras" src="media\camaras.svg" />

                                            </a>
                                            <a className="img-herramientas">
                                                <span className="style-text-herramientas">Herramientas</span>
                                                <img className="style-ico-herramientas" src="media\herramientas.svg" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <section className="section">
                            <div className="section-int">

                                <div className="section1">
                                    <div className="payment">
                                        <svg width="66" height="46" viewBox="0 0 66 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_1_629)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.910339 4.06598C0.910339 2.40786 2.28769 1.06348 3.98457 1.06348H61.941C63.6388 1.06348 65.0152 2.40341 65.0152 4.06598V41.2467C65.0152 42.9049 63.6379 44.2493 61.941 44.2493H3.98457C2.28678 44.2493 0.910339 42.9093 0.910339 41.2467V4.06598Z" fill="white" />
                                                <mask id="mask0_1_629" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="66" height="46">
                                                    <path d="M65.9255 45.1387H0V0.174316H65.9255V45.1387Z" fill="#484848" />
                                                </mask>
                                                <g mask="url(#mask0_1_629)">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.98455 1.95318C2.79154 1.95318 1.82066 2.9011 1.82066 4.06603V41.2468C1.82066 42.412 2.79154 43.3599 3.98455 43.3599H61.941C63.134 43.3599 64.1049 42.412 64.1049 41.2468V4.06603C64.1049 2.9011 63.134 1.95318 61.941 1.95318H3.98455ZM3.98455 45.1387C1.78743 45.1387 -3.05176e-05 43.3928 -3.05176e-05 41.2468V4.06603C-3.05176e-05 1.92027 1.78743 0.174316 3.98455 0.174316H61.941C64.1383 0.174316 65.9256 1.92027 65.9256 4.06603V41.2468C65.9256 43.3928 64.1383 45.1387 61.941 45.1387H3.98455Z" fill="#484848" />
                                                </g>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.2895 15.6911C19.8526 15.6911 21.9302 13.6859 21.9302 11.2121C21.9302 8.73838 19.8526 6.73315 17.2895 6.73315C14.7264 6.73315 12.6488 8.73838 12.6488 11.2121C12.6488 13.6859 14.7264 15.6911 17.2895 15.6911Z" fill="white" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.2895 7.62262C15.2325 7.62262 13.5591 9.23271 13.5591 11.2121C13.5591 13.1914 15.2325 14.8017 17.2895 14.8017C19.3464 14.8017 21.0201 13.1914 21.0201 11.2121C21.0201 9.23271 19.3464 7.62262 17.2895 7.62262ZM17.2895 16.5805C14.2287 16.5805 11.7384 14.1722 11.7384 11.2121C11.7384 8.25189 14.2287 5.84375 17.2895 5.84375C20.3503 5.84375 22.8407 8.25189 22.8407 11.2121C22.8407 14.1722 20.3503 16.5805 17.2895 16.5805Z" fill="#484848" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M48 32.7969C48 31.8045 48.8268 31 49.848 31H58.3194C59.3399 31 60.1672 31.8049 60.1672 32.7969V37.9262C60.1672 38.9186 59.3406 39.7231 58.3194 39.7231H49.848C48.8273 39.7231 48 38.9182 48 37.9262V32.7969Z" fill="#3782F7" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6129 16.2848C13.5176 16.2848 15.8725 14.012 15.8725 11.2085C15.8725 8.40505 13.5176 6.13232 10.6129 6.13232C7.70826 6.13232 5.35342 8.40505 5.35342 11.2085C5.35342 14.012 7.70826 16.2848 10.6129 16.2848Z" fill="#3782F7" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.8424 24.6277H6.66276C6.16002 24.6277 5.75241 24.2295 5.75241 23.7383C5.75241 23.2471 6.16002 22.8489 6.66276 22.8489H14.8424C15.3452 22.8489 15.7528 23.2471 15.7528 23.7383C15.7528 24.2295 15.3452 24.6277 14.8424 24.6277Z" fill="#484848" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5916 34.0388H5.67431C5.36002 34.0388 5.10535 33.79 5.10535 33.4829C5.10535 33.1758 5.36002 32.927 5.67431 32.927H11.5916C11.9059 32.927 12.1605 33.1758 12.1605 33.4829C12.1605 33.79 11.9059 34.0388 11.5916 34.0388Z" fill="#484848" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M24.2115 34.0388H16.0318C15.7175 34.0388 15.4628 33.79 15.4628 33.4829C15.4628 33.1758 15.7175 32.927 16.0318 32.927H24.2115C24.5258 32.927 24.7804 33.1758 24.7804 33.4829C24.7804 33.79 24.5258 34.0388 24.2115 34.0388Z" fill="#484848" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.8535 37.7595H5.67437C5.36008 37.7595 5.10541 37.5107 5.10541 37.2036C5.10541 36.8965 5.36008 36.6477 5.67437 36.6477H20.8535C21.1678 36.6477 21.4224 36.8965 21.4224 37.2036C21.4224 37.5107 21.1678 37.7595 20.8535 37.7595Z" fill="#484848" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M29.2395 24.6277H21.0598C20.5571 24.6277 20.1494 24.2295 20.1494 23.7383C20.1494 23.2471 20.5571 22.8489 21.0598 22.8489H29.2395C29.7422 22.8489 30.1498 23.2471 30.1498 23.7383C30.1498 24.2295 29.7422 24.6277 29.2395 24.6277Z" fill="#484848" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M43.6365 24.6277H35.4569C34.9541 24.6277 34.5465 24.2295 34.5465 23.7383C34.5465 23.2471 34.9541 22.8489 35.4569 22.8489H43.6365C44.1393 22.8489 44.5469 23.2471 44.5469 23.7383C44.5469 24.2295 44.1393 24.6277 43.6365 24.6277Z" fill="#484848" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M58.2174 24.6277H49.6699C49.1672 24.6277 48.7596 24.2295 48.7596 23.7383C48.7596 23.2471 49.1672 22.8489 49.6699 22.8489H58.2174C58.7201 22.8489 59.1277 23.2471 59.1277 23.7383C59.1277 24.2295 58.7201 24.6277 58.2174 24.6277Z" fill="#484848" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1_629">
                                                    <rect width="66" height="46" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>

                                    <div className="pagacontarje">Paga con tarjeta o en efectivo</div>
                                    <div className="conmercado">Con Mercado Pago, paga en cuotas y aprovecha la comodidad de financiación que te da tu banco, o hazlo con efectivo en puntos de pago. ¡Y siempre es seguro!</div>
                                    <div className="comopagar">Cómo pagar con Mercado Pago</div>
                                </div>
                                <div className="section2">
                                    <div className="shiping">
                                        <svg width="56" height="49" viewBox="0 0 56 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_1_660)">
                                                <path d="M53.1568 1H2.8432C1.82523 1 1 1.82523 1 2.8432V8.87832C1 9.89629 1.82523 10.7215 2.8432 10.7215H53.1568C54.1748 10.7215 55 9.89629 55 8.87832V2.8432C55 1.82523 54.1748 1 53.1568 1Z" stroke="#484848" stroke-width="1.3824" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3 10.7214H52.0909V47.0484C52.0909 47.7271 51.5408 48.2772 50.8621 48.2772H4.2288C3.55015 48.2772 3 47.7271 3 47.0484V10.7214Z" stroke="#484848" stroke-width="1.3824" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M23 21.5202L24.6366 19.8695L26.2727 21.5202L27.9091 19.8695L29.5454 21.5202L31.1819 19.8695L32.8182 21.5202V10H23V21.5202Z" fill="#4E89E5" />
                                                <path d="M32.8182 0.299805H23V10.7215H32.8182V0.299805Z" fill="#4C8CF1" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M26.8726 43.9475H8.45479C8.20366 43.9475 8 43.7316 8 43.4657V33.4822C8 33.2159 8.20366 33 8.45479 33H26.8726C27.1237 33 27.3272 33.2159 27.3272 33.4822V43.4657C27.3272 43.7316 27.1237 43.9475 26.8726 43.9475Z" fill="white" stroke="#484848" stroke-width="1.2288" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5472 38.5807C12.2688 38.5807 12.0209 38.4534 11.8594 38.2535C11.7389 38.1047 11.6667 37.9158 11.6667 37.7098C11.6667 37.2288 12.0608 36.8391 12.5472 36.8391C13.0335 36.8391 13.4277 37.2288 13.4277 37.7098C13.4277 38.1911 13.0335 38.5807 12.5472 38.5807ZM12.5472 35.4304C11.2745 35.4304 10.2425 36.451 10.2425 37.7098C10.2425 38.1713 10.3874 38.5963 10.6258 38.9554L12.5472 41.5064L14.4743 38.9554C14.7114 38.5969 14.8517 38.1701 14.8517 37.7098C14.8517 36.451 13.8201 35.4304 12.5472 35.4304Z" fill="#484848" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.1985 36.6456H23.347C23.6825 36.6456 23.9545 36.3736 23.9545 36.038C23.9545 35.7024 23.6825 35.4304 23.347 35.4304H17.1985C16.8629 35.4304 16.5909 35.7024 16.5909 36.038C16.5909 36.3736 16.8629 36.6456 17.1985 36.6456Z" fill="#484848" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.1985 39.076H21.506C21.8416 39.076 22.1136 38.804 22.1136 38.4684C22.1136 38.1329 21.8416 37.8608 21.506 37.8608H17.1985C16.8629 37.8608 16.5909 38.1329 16.5909 38.4684C16.5909 38.804 16.8629 39.076 17.1985 39.076Z" fill="#484848" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.1985 41.5065H22.1197C22.4552 41.5065 22.7273 41.2344 22.7273 40.8989C22.7273 40.5633 22.4552 40.2913 22.1197 40.2913H17.1985C16.8629 40.2913 16.5909 40.5633 16.5909 40.8989C16.5909 41.2344 16.8629 41.5065 17.1985 41.5065Z" fill="#484848" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1_660">
                                                    <rect width="56" height="49" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>

                                    <div className="enviogratis">Envío gratis desde $ 90.000</div>
                                    <div className="consolotext">Con solo estar registrado en Mercado Libre, tienes envíos gratis en miles de productos seleccionados.</div>
                                    <div className="concebenefi">Conoce más sobre este beneficio</div>
                                </div>
                                <div className="section3">
                                    <div className="protecte">
                                        <svg width="52" height="55" viewBox="0 0 52 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_1_684)">
                                                <path d="M23.3787 33.8789L17.7929 28.2931C17.4024 27.9026 17.4024 27.2694 17.7929 26.8789L19.3787 25.2931C19.7692 24.9026 20.4024 24.9026 20.7929 25.2931L24.0858 28.586L33.3787 19.2931C33.7692 18.9026 34.4024 18.9026 34.7929 19.2931L36.3787 20.8789C36.7692 21.2694 36.7692 21.9026 36.3787 22.2931L24.7929 33.8789C24.4024 34.2695 23.7692 34.2695 23.3787 33.8789Z" fill="#3483FA" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M26.2087 1.4126C26.2087 1.4126 19.2087 11.4126 2.20867 8.4126C2.20867 8.4126 -3.79133 37.7676 26.2087 53.5906C56.2087 37.7676 50.2087 8.4126 50.2087 8.4126C33.2087 11.4126 26.2087 1.4126 26.2087 1.4126Z" stroke="#474747" stroke-width="1.413" stroke-linecap="round" stroke-linejoin="round" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1_684">
                                                    <rect width="51" height="55" fill="white" transform="translate(0.5)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>

                                    <div className="seguridadtext">Seguridad, de principio a fin</div>
                                    <div className="notegustatext">¿No te gusta? ¡Devuélvelo! En Mercado Libre, no hay nada que no puedas hacer, porque estás siempre protegido.</div>
                                    <div className="comotegustatext">Cómo te protegemos</div>
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

export default indexPage;
