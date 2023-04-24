const Beneficios = () => {
    return (
        <div className="beneficios-punto-pp flex-col gap-6 ml-20">
            <div className="benedicios-texto">
                <span className="texto-beneficios">Beneficios de Mercado Puntos</span>
                <span className="texto-verbeneficios">Ver todos los beneficios</span>
            </div>
            <div className="contenedor-streaming">
                <div className="streaming-interior">
                <a className="contenedor-disney">
                        <img className="flex w-[384px] h-[250px]" src="media\image\disneyconte.png" />
                    </a>
                    <a className="contenedor-disney">
                        <img className="flex w-[384px] h-[250px]" src="media\image\hboconte.png" />
                    </a>
                    <a className="contenedor-disney">
                        <img className="flex w-[384px] h-[250px]" src="media\image\paramouconte.png" />
                    </a>

                </div>

            </div>

        </div>
    )

}

export { Beneficios};