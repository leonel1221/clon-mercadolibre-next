
const Beneficios = () => {
    return (
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
                            <img className="p-3 pt-2" src="media\image\comboplus.png" />
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
                            <img className="p-3 pt-2" src="media\image\logoSquarehbo.png" />
                            <div className="difuminado-hbo"></div>
                            <div className="cont-text-hbo">
                                <span className="textodiasmas">7 DÍAS GRATIS</span>
                                <span className="texto-sincargo">Hasta 50% OFF</span>
                                <span className="texto-hbo ">HBO Max</span>
                            </div>
                        </div>
                    </a>
                    <a className="contenedor-paramount">
                        <img src="media\image\paramount_widgetmulti.png" />
                        <div className="cont-comentarios-paramout">
                            <img className="p-3 pt-2" src="media\image\paramount-logo.png" />
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
    )

}


export { Beneficios};