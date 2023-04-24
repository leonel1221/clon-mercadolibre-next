
const Descubre = () => {
    return (
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
                        <button className="boton-suscribirme"><span className="vertext">Suscribirme</span></button>
                    </div>
                    <div className="estilo-imgpla"><img src="media\image\plataformas.png" /></div>

                </a>
            </div>
        </div>
    )

}

export { Descubre};