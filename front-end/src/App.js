import React from 'react';
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <div className="App">
      <Header/>
      <main className="py-5">
        <Container>
          <h1></h1>
          <MainPage/>
        </Container>
      </main>

    </div>
  );
}

export default App;
