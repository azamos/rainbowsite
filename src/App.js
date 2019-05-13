import React from 'react';
import './App.css';
import Counter from './components/counter/counter';
import ColorPicker from './components/colorPicker/colorPicker';
import DataCruncher from "./components/data/dataCruncher";
import Register from './components/register/register';
function App() {
  return (
    <div className="App">
      <Counter/>
      <ColorPicker/>
      <DataCruncher/>
      <Register/>
    </div>
  );
}

export default App;
