import React from 'react';
import './App.css';
// import axios from "axios";
import PeopleCard from "./Components/PeopleCard";
import NavBar from "./Components/NavBar";
// import Test from "./Components/PeopleCar.test";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      // data: []
    }
  }


  render(){
    return (
      <div className="App">
        <NavBar />
        <PeopleCard/>
        {/* <Test data={this.state.data}/> */}
        <h1 data-testid="h1">Hello</h1>
      </div>
    );
  }
}
