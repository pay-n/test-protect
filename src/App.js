import React from 'react';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import {Container} from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <>
     <Header />
     <Container fluid>
      <Wrapper />
     </Container>
    </>
  );
}

export default App;
