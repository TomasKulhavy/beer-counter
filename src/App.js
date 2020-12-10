import './App.css';
import React, { useState } from 'react';
import NavigationBar from "./components/NavigationBar";
import Restaurant from "./components/Restaurant";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';

const copyMultidimensionalArray = arr => {
  return JSON.parse(JSON.stringify(arr));
}

function App() {
  const initialState = {name: "U poníka", tables: [[1,0,0,0], [1,2,3], [0,1]], total: 8};
  const [name, setName] = useState(initialState.name);
  const [tables, setTables] = useState(initialState.tables);
  const [total, setTotal] = useState(initialState.total);


  function addTable () {
    setTables([...tables, []]);
  }

  function addChlebicek (index, indexChair) {
    const newTable = copyMultidimensionalArray(tables);
    newTable[index][indexChair]++;
    setTables(newTable);
  }

  return (
    <div className="App">
      <NavigationBar addTable={addTable}/>
      <Container>
        <Restaurant name={name} tables={tables} total={total} addChlebicek={addChlebicek}/>
      </Container>
    </div>
  );
}

export default App;
