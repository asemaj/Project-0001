import './App.css';
import  { React,useState,useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'
import Success from './pages/Success';
import Cancel from './pages/Cancel';
import Chat from './pages/Chat';
import NavbarComponent from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Payment from './components/Payment';

 function App() {

  return (
    <Container>
      <NavbarComponent></NavbarComponent>
      <BrowserRouter>
        <Routes>
          <Route index element={<Chat/>}/>
          <Route path="success" element={<Success/>}/>
          <Route path="cancel" element={<Cancel/>}/>
          <Route path="payment" element={<Payment/>}/>

        </Routes>
      </BrowserRouter>
    </Container>
  );
    
}
export default App;
