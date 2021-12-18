import React from "react";

import "./App.css";
import Banner from "./components/banner";
import Header from "./components/header";
import Searchbar from "./components/searchbar";

function App() {
  return (
    <div className="relative">
      {/* <Particle params={particlesConfig} className="App-particles__container" /> */}

      <div
        className='h-full'
        style={{ minHeight: "100vh",  backgroundColor:"black",borderBottomRightRadius:"75%"}}>
       
        <Header />
        <Banner />
        <Searchbar />
      </div>
    </div>
  );
}

export default App;
