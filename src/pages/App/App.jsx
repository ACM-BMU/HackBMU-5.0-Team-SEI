import "./App.css";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import HomePage from "../HomePage/HomePage";
import InfoPage from "../InfoPage/InfoPage";
import TimeLinePage from "../TimeLinePage/TimeLinePage";
import ResourcesPage from "../ResourcesPage/ResourcesPage";
import NewsPage from "../NewsPage/NewsPage";
import "antd/dist/antd.css";

export default function App() {
  return (
    <main className="App">
      <Navbar />
      <Routes>
        <Route path="/info" element={<InfoPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/timeline" element={<TimeLinePage />} />
        <Route path="/resources" element={<ResourcesPage />} />
      </Routes>
    </main>
  );
}
