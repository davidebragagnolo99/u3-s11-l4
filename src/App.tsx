import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainPage from "./components/MainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ArtDetails from "./components/ArtDetails";
import NavbarComponent from "./components/NavbarComponent";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/art-details/:article_id" element={<ArtDetails />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
