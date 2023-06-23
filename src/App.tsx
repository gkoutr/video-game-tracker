import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";

import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  RouterProvider,
  createBrowserRouter,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import GamePage from "./components/GamePage";
import HomePage from "./components/HomePage";

const App = () => {


  return (
    <Container className="p-3" style={{ maxWidth: "800px" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/game/:id" element={<GamePage />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
};

export default App;
