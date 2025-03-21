import './App.css'

import {Routes, Route} from "react-router-dom";

import HomePage from './views/HomePage/HomePage';
import ContactoPage from './views/ContactoPage/ContactoPage';

function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/contacto" element={<ContactoPage/>} />
      </Routes>
    </>
  )
}

export default App
