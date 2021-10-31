import React from "react";

import {
  About,
  Blog,
  Contact,
  Introduction,
  Partners,
  Portfolio,
  Pricing,
  Services,
  Skills,
  Statistics,
  Testimonial
} from "./components";
import { BackToTop, Footer, Header } from "./utils";


function App() {
  return (
    <>
      <Header />
      <Introduction />
      <Services />
      <About />
      <Skills />
      <Portfolio />
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