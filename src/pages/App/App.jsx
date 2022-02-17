import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import Navbar from "../../components/Navbar/Navbar";
import IndexNFTPage from "../IndexNFTPage/IndexNFTPage";

export default function App() {
  return (
    <main className="App">
      <Navbar />
      <Routes>
        <Route path="/browse" element={<IndexNFTPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </main>
  );
}
