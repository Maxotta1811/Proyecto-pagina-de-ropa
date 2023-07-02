import Header from "../Componentes/Header";
import SlidingAd from "../Componentes/barra";
import Nav from "../Componentes/Nav"
import DarkVariantExample from "../Componentes/Carrusel2";
import Galeria from "../Componentes/Galeria";
import TeamSection from "../Componentes/Nosostros2";
import Footer from "../Componentes/Footer";
import Pantalones from "../Componentes/Pantalones";
const PantalonesP = () =>{
    return(
        
        <div>
            <div className="sliding-ad-container">
                <SlidingAd />
            </div>
            <Header/>
            <Nav />
            < DarkVariantExample />
            <Galeria />
            <Pantalones/>
            <TeamSection />
            <Footer />
        </div>
    );
}

export default PantalonesP