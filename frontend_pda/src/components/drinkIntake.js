import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import 'font-awesome/css/font-awesome.min.css';
import Axios from 'axios';

export class drinkIntake extends Component {
    constructor(props) {
        super(props);

        this.onChangeDrink = this.onChangeDrink.bind(this);
        this.submitDrink = this.submitDrink.bind(this);

        this.state = {
            caloriesAlcohol: [0, 0]
        }
    }
    onChangeDrink(e) {
        console.log(e.target.value)
        this.setState({
            caloriesAlcohol: e.target.value.split(",")
        })
    }
    submitDrink() {
        console.log(this.state.caloriesAlcohol)
        console.log("beep");
        if (this.state.caloriesAlcohol[0] !== 0) {
            let updates = {
                calories: this.state.caloriesAlcohol[0],
                alcohol: this.state.caloriesAlcohol[1]
            }
            console.log(updates)
            Axios.put(`http://localhost:3000/Patient/patient/5e6c9247bee9cc271cbf3e22`, updates);
        }
    }
    render() {
        return (
            <div className="container">
                <div style={pdaStyle}>
                    <div className="row">
                        <div className="col-md-4"><i className="fa fa-beer fa-5x"></i></div>
                        <div className="col-md-4">
                            <select className="form-control" onChange={this.onChangeDrink}>
                                <option value={"0,0"}>Please Select Drink</option>
                                <option value={"200,0"}>500ml Soda</option>
                                <option value={"85,1"}>Shot of 40'</option>
                                <option value={"150,2"}>Glass of Wine</option>
                                <option value={"500,3"}>Cocktail</option>
                                <option value={"180,2"}>Pint of Beer</option>
                            </select>
                        </div>
                        <div className="col-md-4">
                            <button type="button" className="btn btn-success" style={buttonStyle} onClick={this.submitDrink}><i className="fa fa-check fa-3x"></i> </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <Link style={linkStyle} to="/home"><div style={{ fontSize: "20px" }}> <i className="fa fa-arrow-left fa-3x"></i> PDA Back Button</div></Link>
                    </div>
                </div>
            </div>
        )
    }
}

const pdaStyle = {   // Css styling for the form
    margin: "0 auto",
    textAlign: 'center',
    height: "450px",
    width: "800px",
    border: "10px solid black",
    padding: "30px",
    paddingTop: "150px"
}
const linkStyle = {
    color: '#000',
    textDecoration: 'none'
}
const buttonStyle = {
    height: "150px",
    width: "150px"
}

export default drinkIntake
