import React from "react";

import {
  About,
  Contact,
  Introduction,
  Partners,
  Statistics,
  Resume,
} from "./components";
import { BackToTop, Footer, Header } from "./utils";


function App() {
  return (
    <>
      <Header />
      <Introduction />
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