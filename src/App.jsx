import { BrowserRouter as Router } from "react-router-dom";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Tech from "./components/Tech";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Education from "./components/Education";

const App = () => {
  return (
    <Router>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Education />
        <Works />
        <Tech />
        <div className="relative z-0">
          <Contact />
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
