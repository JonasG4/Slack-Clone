import React from "react";
import "./App.css";
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar"

function App() {
  return (
    <div className="App">
      <Router>
        <>
        <Header/>
        <AppBody>
          <Sidebar/>
          <Routes>
            <Route path="/"/>
          </Routes>
        </AppBody>
        </>
      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div;
