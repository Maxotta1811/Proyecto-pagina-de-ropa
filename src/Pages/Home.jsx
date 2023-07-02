import Header from "../Componentes/Header";
import SlidingAd from "../Componentes/barra";
import Nav from "../Componentes/Nav"
import DarkVariantExample from "../Componentes/Carrusel2";
import Galeria from "../Componentes/Galeria";
import Novedades from "../Componentes/Novedades";
import TeamSection from "../Componentes/Nosostros2";
import Footer from "../Componentes/Footer";
import { useEffect, useState } from "react";
const Home = () =>{

    return(
        <div>
            <div className="sliding-ad-container">
                <SlidingAd />
            </div>
            <Header/>
            <Nav />
            < DarkVariantExample />
            <Galeria />
            <Novedades />
            <TeamSection />
            <Footer />
        </div>
    );
}

export default Home