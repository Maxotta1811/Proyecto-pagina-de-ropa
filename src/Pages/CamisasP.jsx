import Header from "../Componentes/Header";
import SlidingAd from "../Componentes/barra";
import Nav from "../Componentes/Nav"
import DarkVariantExample from "../Componentes/Carrusel2";
import Galeria from "../Componentes/Galeria";
import TeamSection from "../Componentes/Nosostros2";
import Footer from "../Componentes/Footer";
import Camisas from "../Componentes/Camisas"
const CamisasP = () =>{
    return(
        
        <div>
            <div className="sliding-ad-container">
                <SlidingAd />
            </div>
            <Header/>
            <Nav />
            < DarkVariantExample />
            <Galeria />
            <Camisas/>
            <TeamSection />
            <Footer />
        </div>
    );
}

export default CamisasP