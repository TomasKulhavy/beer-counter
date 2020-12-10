import './App.css';
import React, { useState } from 'react';
import NavigationBar from "./components/NavigationBar";
import Restaurant from "./components/Restaurant";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';

function App() {
  const initialState = {name: "U poníka", tables: [[1,0,0,0], [1,2,3], [0,1]], total: 8};
  const [name, setName] = useState(initialState.name);
  const [tables, setTables] = useState(initialState.tables);
  const [total, setTotal] = useState(initialState.total);
  const tableCount = initialState.tables.length;

  return (
    <div className="App">
      <NavigationBar />
      <Container>
        <Restaurant name={name} tables={tables} total={total} tableCount={tableCount} />
      </Container>
    </div>
  );
}

export default App;
