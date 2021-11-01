import React from "react";

import {
  About,
  Contact,
  Introduction,
  Partners,
  Services,
  Skills,
  Statistics,
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
      <Statistics />
      <Partners />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;