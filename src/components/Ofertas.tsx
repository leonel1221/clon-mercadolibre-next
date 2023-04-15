
const Ofertas = () => {
    return (
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
    )
}

export { Ofertas};