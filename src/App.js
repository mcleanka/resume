import Introduction from "./components/Introduction";
import Services from "./components/Services";
import About from "./components/About";
import Footer from "./utils/Footer";
import Header from "./utils/Header";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import BackToTop from "./utils/BackToTop";
import React from "react";
import Statistics from "./components/Statistics";
import Testimonial from "./components/Testimonial";
import Partners from "./components/Partners";
import Pricing from "./components/Princing";

function App() {
  return (
    <>
      <Header />
      <Introduction />
      <Services />
      <About />
      <Portfolio />
      <Skills />
      <Pricing />
      <Statistics />
      <Testimonial />
      <Partners />
      <Blog />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;