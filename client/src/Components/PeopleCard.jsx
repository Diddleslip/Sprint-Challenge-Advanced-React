import React from 'react'
import "../index.css";
import axios from "axios";


const divCard = {
    border: "30px solid lawngreen",
    background: "",
    color: "black"
}

export default class PeopleCard extends React.Component {
    constructor() {
        super();

        this.state = {
            data: []
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/api/players`)
        .then(response => {
          console.log(response.data);
          this.setState({
            data: response.data,
          })
        })
        .catch(error => {
          console.log("Caught error :( :", error);
        })
      }


    render() {
        return (
            <div>
                <h1>Alex Morgan</h1>
                <h2>USA</h2>
                <h2>Popularity: 1000</h2>
                {this.state.data.map(X => {
                    return (
                        <div style= {divCard} key={X.id}>
                            <h1 styles= {divCard} className={divCard}>{X.name}</h1>
                            <h2>{X.country}</h2>
                            <h2>Popularity: {X.searches}</h2>
                        </div>
                    )
                })}
            </div>
        )
    }
}
