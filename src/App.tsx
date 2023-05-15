import React from 'react';
import './App.css';
import Home from './components/Home/Home';
// import {
//   BrowserRouter as Router,
//   Route,
// } from "react-router-dom";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Detail from './components/Detail/Detail';

function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Home></Home>
      <Detail/>
      <Routes>
          <Route path="/">
            
          </Route>
          <Route path="/detail/:id">
            
          </Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;