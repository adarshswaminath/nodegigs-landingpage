import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Analytics from "./components/Analytics";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills"

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Contact />
      <Skills />
      <Footer />
    </div>
  )
}

export default App