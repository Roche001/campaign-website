import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Top from "./components/top/Top";
import Home from "./components/home/Home";
import Violence from "./components/violence/Violence";
import Hidden from "./components/hidden/Hidden";
import Wellbeing from "./components/wellbeing/Wellbeing";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Top />
      <Home />
      <Violence />
      <Hidden />
      <Wellbeing />
      <Footer />
    </>
  );
};

export default App;
