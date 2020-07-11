import React from 'react';
import './App.css';
import Chart from './Components/Chart'
import Table from './Components/Table'
class App extends React.Component {
  render(){
    return(
      <div>
        <Chart/>
        <Table/>
      </div>
    )
  }
}

export default App;
