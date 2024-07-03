import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";
import Header from "./components/header";
import Home from "./components/Home";
import Expirience from "./components/experience";

export default function App() {
  return (
    <div>
      <Header />
      <Home />
      <Expirience />
    </div>
  );
}
