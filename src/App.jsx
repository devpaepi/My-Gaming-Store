// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import TopSec from "./components/TopSec";
import DownSec from "./components/DownSec";

function App() {
  const styles = {
    height: "100px",
    width: "100%",
  };
  return (
    <>
      <TopSec />
      <DownSec />
      <NavBar />
      <div style={styles}>footer (comming soon)</div>
    </>
  );
}

export default App;
