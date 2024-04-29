// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import TopSec from "./components/TopSec";
import DownSec from "./components/DownSec";

function App() {
  return (
    <>
      <TopSec />
      <NavBar />
      <DownSec />
    </>
  );
}

export default App;
