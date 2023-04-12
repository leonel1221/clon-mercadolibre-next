
const Formaspago = () => {
    return (
        <div className="formas-de-pago">
            <div className="mediospagos">

                <div className="cuotas">

                    <img src="media\image\credit-card.svg" />
                    <span className="text-num-cuotas">Hasta 48 cuotas</span>
                    <span className="text-vermas-cuotas">Ver más</span>
                </div>
                <div className="transferencias">
                    <img src="media\transfer.svg" />
                    <span className="text-transferencia">Transferencia desde tu banco</span>
                    <span className="text-vermas-transfer">Ver más</span>
                </div>
                <div className="pagaefectivo">
                    <img src="media\payment-agreement.svg" />
                    <span className="text-pagaefectivo">Paga en efectivo</span>
                    <span className="text-vermas-pagaefectivo">Ver más</span>
                </div>
            </div>
            <div className="masmediospagos">
                <img src="media\view-more.svg" />
                <span className="text-masmedios">Más medios de pago</span>
                <span className="text-vertodos">Ver todos</span>
            </div>
        </div>
    )
}

export { Formaspago};