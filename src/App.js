import "./App.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Licenses from "./pages/Licenses";
import Legal from "./pages/Legal";
import Signin from "./pages/Signin";
import Security from "./pages/Security";
import Careers from "./pages/Careers";
import Press from "./pages/Press";
import Support from "./pages/Support";
import Status from "./pages/Status";
import Codeblog from "./pages/Codeblog";
import PageNotFound from "./pages/PageNotFound ";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState(true);
  const setThemeFun = (changedTheme) => {
    setTheme(changedTheme);
  };
  return (
    <div
      className={theme ? "darkTheme" : "lightTheme"}
      id="app"
      style={{ backgroundColor: "var(--bgColor)" }}
    >
      <Navbar themeProps={{ theme, setThemeFun }} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/licenses" element={<Licenses />} />
        <Route path="/security" element={<Security />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/press" element={<Press />} />
        <Route path="/support" element={<Support />} />
        <Route path="/status" element={<Status />} />
        <Route path="/codeblog" element={<Codeblog />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
