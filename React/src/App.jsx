/*import React from "react";*/
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto pt-10 px-6">
        <HeroSection></HeroSection>
      </div>
    </>
  );
};

export default App;
