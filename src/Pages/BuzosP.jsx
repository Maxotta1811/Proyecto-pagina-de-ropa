import Header from "../Componentes/Header";
import SlidingAd from "../Componentes/barra";
import Nav from "../Componentes/Nav"
import DarkVariantExample from "../Componentes/Carrusel2";
import Galeria from "../Componentes/Galeria";
import TeamSection from "../Componentes/Nosostros2";
import Footer from "../Componentes/Footer";
import Buzos from "../Componentes/Buzos";
const BuzosP = () =>{
    return(
        
        <div>
            <div className="sliding-ad-container">
                <SlidingAd />
            </div>
            <Header/>
            <Nav />
            < DarkVariantExample />
            <Galeria />
            <Buzos/>
            <TeamSection />
            <Footer />
        </div>
    );
}

export default BuzosP