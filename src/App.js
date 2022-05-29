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

import { Button } from "./html/Button";


console.log(Button);

function App() {
  return (
    <>
      <Button />
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