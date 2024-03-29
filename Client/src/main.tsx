import React from "react";
import ReactDOM from "react-dom/client";
import LandingPage from "./LandingPage.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/index.tsx";
import Utleie from "./Utleie.tsx";
import UtleieVerification from "./UtleieVerification.tsx";
import Innlevering from "./Innlevering.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Utleie" element={<Utleie />} />
          <Route path="/Utleie/Godkjennelse" element={<UtleieVerification />} />
          <Route path="/innlevering" element={<Innlevering />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
