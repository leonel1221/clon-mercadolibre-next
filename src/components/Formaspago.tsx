
const Formaspago = () => {
    return (
        <div className="formas-de-pago">
            <div className="mediospagos">

                <div className="contenedor-mediospagos">
                    <img className="tamaño-icon" src="media\image\credit-card.svg" />
                    <div>
                        <span className="text-formaspago">Hasta 48 cuotas</span>
                        <span className="text-vermas">Ver más</span>
                    </div>
                </div>
                <div className="contenedor-mediospagos">
                    <img className="tamaño-icon"  src="media\transfer.svg" />
                    <div >
                        <span className="text-formaspago">Transferencia desde tu banco</span>
                        <span className="text-vermas">Ver más</span>
                    </div>
                    
                </div>
                <div className="contenedor-mediospagos">
                    <img className="tamaño-icon"  src="media\payment-agreement.svg" />
                    <div>
                        <span className="text-formaspago">Paga en efectivo</span>
                        <span className="text-vermas">Ver más</span>
                    </div>
                    
                </div>
                <div className="contenedor-mediospagos">
                <img className="tamaño-icon" src="media\view-more.svg" />
                <div>
                    <span className="text-formaspago">Más medios de pago</span>
                    <span className="text-vermas">Ver todos</span>
                </div>
                
            </div>
            </div>
            
        </div>
    )
}

export { Formaspago};