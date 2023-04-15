
const Header = () => {
return (
    <header className="cont-header-pp">
                <div className="cont-header">
                    <div className="flex gap-[30px] ml-[100px] ">
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
                    <div className="flex ml-[100px] mt-[20px] ">
                        <div className="cont-ingresa-domicilio margen1">
                            <span className="texr-ingresa-domicilio">Ingresa tu domicilio</span>
                        </div>

                        <div className="margen1 organization ml-[50px] flex gap-[20px] ">
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

                        <div className="crea-tucuenta margen2 ml-[180px] ">
                            <span>Crea tu cuenta Ingresa Mis Compras</span>
                        </div>
                    </div>


                </div>
    </header>
)
}

export { Header};