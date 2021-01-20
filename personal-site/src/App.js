// import logo from './logo.svg';
import React, { Component } from "react";
import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Home}/>
        <Redirect to="/"/>
      </BrowserRouter>
    </div>
  );
}

export default App;
