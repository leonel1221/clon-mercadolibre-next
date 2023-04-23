
const Header = () => {
return (
    <header className="cont-header-pp">
                <div className="cont-header">
                    <div className="flex gap-[30px] ml-80 ">
                        <div className="logo-mercadolibre">
                            <img src="media\image\logo-mercadolibre.svg" />
                        </div>

                        <div className="buscador-header">
                            <form className="ingresa-loquequieras">
                                <label>
                                    <input className="place-holder" type="text" placeholder="Buscar productos, marcas y más..."/>
                                </label>
                            </form>
                        </div>
                    </div>
                    <div className="flex flex-row ml-[110px] mt-[26px] ">
                        <div className="cont-ingresa-domicilio margen1">
                            <span className="texr-ingresa-domicilio">Ingresa tu domicilio</span>
                        </div>
                        <div className=" mt-12 ml-[150px] flex gap-8">
                            <div className="flex gap-[3px] ">
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

                        <div className="crea-tucuenta mt-8 ml-[140px] ">
                            <span>Crea tu cuenta Ingresa Mis Compras</span>
                            
                        </div>
                        <img className="shopincar-conte ml-[380px] mt-8 " src="media\image\cart-shopping.png" />
                    </div>


                </div>
    </header>
)
}

export { Header};