const Colecciones = () => {
    return (
        <div className="colecciones">

            <div >
                <div className="flex md:flex-row flex-col items-center gap-4 " >
                    <a >
                        <div className="flex flex-col">
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
                    <div className="flex flex-col ">
                        <div className="colecciones-inter flex gap-4">
                            <a ><img src="media\image\1.png" /></a>
                            <a ><img src="media\image\2.png" /></a>
                            <a ><img src="media\image\3.png" /></a>
                            <a ><img src="media\image\4.png" /></a>
                        </div>
                        <div className="colecciones-inter flex gap-4">
                            <a ><img src="media\image\5.png" /></a>
                            <a ><img src="media\image\6.png" /></a>
                            <a ><img src="media\image\7.png" /></a>
                            <a ><img src="media\image\8.png" /></a>
                        </div>
                    </div>
                    

                </div>
            </div>
        </div>
    )

}

export { Colecciones};