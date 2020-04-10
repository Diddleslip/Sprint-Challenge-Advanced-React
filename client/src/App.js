import React from 'react';
import './App.css';
import axios from "axios";
import PeopleCard from "./Components/PeopleCard";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      data: []
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/api/players`)
    .then(response => {
      this.setState({
        data: response.data,
      })
    })
    .catch(error => {
      console.log("Caught error :( :", error);
    })
  }

  render(){
    return (
      <div className="App">
        <PeopleCard data={this.state.data}/>
        <h1>Hello</h1>
      </div>
    );
  }
}
