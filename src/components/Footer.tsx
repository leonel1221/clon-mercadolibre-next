
const Footer = () => {
    return (
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

                <div className="footer2 flex p-6">
                    <img src="media\image\sic.png" />
                    <img src="media\image\pum.png" />
                </div>
        </footer>
    )
    }
    
    export { Footer};