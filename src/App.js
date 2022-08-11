import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import FullTime from "./Fulltime";
import PartTime from "./PartTime";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<FullTime />} />
        <Route path="/pt" element={<PartTime />} />
      </Routes>
    </div>
  );
}
