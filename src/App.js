import React from "react";

import {
  About,
  Contact,
  Introduction,
  Partners,
  Services,
  Statistics,
  Resume,
} from "./components";
import { BackToTop, Footer, Header } from "./utils";


function App() {
  return (
    <>
      <Header />
      <Introduction />
      <Services />
      <About />
      <Resume />
      <Statistics />
      <Partners />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;