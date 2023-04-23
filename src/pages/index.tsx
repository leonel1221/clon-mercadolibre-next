import Link from "next/link";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Novedades } from "../components/Novedades";
import { Formaspago } from "../components/Formaspago";
import { Ofertas } from "../components/Ofertas";
import { Subenivel } from "../components/Subenivel";
import { Beneficios } from "../components/Beneficios";
import { Descubre } from "../components/Descubre";
import { Seccionpp } from "../components/Seccionpp";
import { Hcolecciones } from "../components/Hcolecciones";
import { Colecciones } from "../components/Colecciones";
import { Categoriaspopulares } from "../components/Categoriaspopulares";
import { Section } from "../components/Section";



const indexPage = () => {
    return (
        <div className="contenedor-body">
            <Header />
            <main className="contenedor-main">
                <div>
                    <div>
                        <Novedades />
                        <Formaspago />
                        <Ofertas/>
                        <Subenivel />
                        <Beneficios />
                        <Descubre />
                        <Seccionpp />
                        <Hcolecciones />
                        <Colecciones />
                        <Categoriaspopulares />
                        <Section/>

                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default indexPage;
