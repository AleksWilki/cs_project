import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import 'font-awesome/css/font-awesome.min.css';
import Axios from 'axios';

export class foodIntake extends Component {
    constructor(props) {
        super(props);

        this.onChangeFood = this.onChangeFood.bind(this);
        this.submitFood = this.submitFood.bind(this);

        this.state = {
            calories: 0
        }
    }
    onChangeFood(e) {
        this.setState({
            calories: e.target.value
        })
    }
    submitFood() {
        console.log("beep");
        if (this.state.calories !== 0) {
            let updates = {
                calories: this.state.calories,
            }
            Axios.put(`http://localhost:3000/Patient/patient/5e6c9247bee9cc271cbf3e22`, updates);
        }
    }
    render() {
        return (
            <div className="container">
                <div style={pdaStyle}>
                    <div className="row">
                        <div className="col-md-4"><i className="fa fa-spoon fa-5x"></i></div>
                        <div className="col-md-4">
                            <div>
                                Select the food you have eaten
                            </div>
                            <select className="form-control" onChange={this.onChangeFood}>
                                <option value={0}>Please Select Food</option>
                                <option value={350}>Sandwich</option>
                                <option value={600}>Salad</option>
                                <option value={800}>English Breakfast</option>
                                <option value={900}>Roast Dinner</option>
                                <option value={700}>Chicken Dinner</option>
                                <option value={450}>Serving of snacks</option>
                            </select>
                        </div>
                        <div className="col-md-4">
                            <button type="button" className="btn btn-success" style={buttonStyle} onClick={this.submitFood}><i className="fa fa-check fa-3x"></i> </button>
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

export default foodIntake
