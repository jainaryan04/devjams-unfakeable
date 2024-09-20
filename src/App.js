"use client"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import UploadPage from './components/Upload';

function App() {
  return (
    <Router>
    <Routes>
    <Route path="/" element={<UploadPage />} />
    </Routes>
    </Router>
  );
  
}

export default App;
