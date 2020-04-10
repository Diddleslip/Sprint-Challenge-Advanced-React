import React from 'react'
import "../index.css";


const divCard = {
    border: "30px solid lightblue",
    background: "",
    color: "red"
}

export default class PeopleCard extends React.Component {
    constructor() {
        super();

    }


    render() {
        return (

            <div>
                {console.log(this.props.data[0])}
                {this.props.data.map(X => {
                    return (
                        <div style= {divCard} key={X.id}>
                            <h1 styles= {divCard} className={divCard}>{X.name}</h1>
                            <h2>{X.country}</h2>
                            <h2>{X.searches}</h2>
                        </div>
                    )
                })}
            </div>
        )
    }
}
