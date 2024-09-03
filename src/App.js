import React from "react";
import RoundOne from './Components/roundDesing/RoundOne';
import RoundTwo from "./Components/roundDesing/RoundTwo";
import RoundThree from "./Components/roundDesing/RoundThree";
import RoundFour from "./Components/roundDesing/RoundFour";
import RoundFive from "./Components/roundDesing/RoundFive";
import Home from "./Home";


function App() {
  return (
    <div className="w-full h-screen font-bodyfont text-texColor bg-black relative  overflow-hidden">
          <div className="max-w-screen-2xl h-full mx-auto flex justify-center items-center">
          <Home  />
          
          </div>
      <div className="w-full h-full absolute top-0 left-0 z-10">
        <RoundOne />
        <RoundTwo />
        <RoundThree />
        <RoundFour />
        < RoundFive />
      </div>
    </div>
  );
}

export default App;
