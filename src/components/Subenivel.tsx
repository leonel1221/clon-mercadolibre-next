const Subenivel = () => {
    return (
        <div className="sube-al-nivel-pp">
            <div className="suscribete-nivel-arriba">
                <span className="texto-sucribete-nivel">Suscríbete al nivel 6</span>
                <div className="suscribete-precio"> 
                    <div className="pseudo-precios">
                        <svg width="3" height="38" viewBox="0 0 3 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="path-1-inside-1_1_207" fill="white">
                                <path d="M0.0625 0.1875H2.0625V37.1875H0.0625V0.1875Z" />
                            </mask>
                            <path d="M2.0625 37.1875V0.1875H-1.9375V37.1875H2.0625Z" fill="white" mask="url(#path-1-inside-1_1_207)" />
                        </svg>
                    </div>           
                    <span className="precio-mes">
                        <span className="precio-suscripcion">$50.690</span>
                        <span className="cont-precio-mes">
                            <span className="text-precio-mes">$ 17.899</span>
                            <span className="mes">/mes</span>
                        </span>
                    </span>
                </div>
            </div>
            <div className="suscribete-nivel-centro">
                <span className="consigue-mejores-precios">Consigue los mejores beneficios en Mercado Libre</span>
                <div className="barra-envios">
                    <div className="plataformassinrecargo">
                        <div className="conten-icon-plataformas">
                            <div className="lstarplus">
                                <img src="media\image\ldplus.png" />
                            </div>
                        </div>
                        <span className="textplataformas">Disney+ sin cargo</span>
                    </div>
                    <div className="plataformassinrecargo">
                        <div className="conten-icon-plataformas">
                            <div className="lstarplus">
                                <img src="media\image\lstarplus.png" />
                            </div>
                        </div>
                        <span className="textplataformas">Star+ sin cargo</span>
                    </div>
                    <div className="plataformassinrecargo">
                        <div className="conten-icon-plataformas">
                            <div className="lstarplus">
                                <img src="media\image\carritoenvios.png" />
                            </div>
                        </div>
                        <span className="textplataformas">Envíos gratis y rápidos desde $ 90.000 y 40% OFF en envíos de menos de $ 90.000</span>
                    </div>
                </div>
            </div>
            <div className="suscribete-nivel-abajo">
                <button className="boton-suscribete-nivel ">Suscribete</button>
            </div>
        </div>
    )
}


export { Subenivel};