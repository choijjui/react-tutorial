import React, {Component} from "react";

export default class EventPractice extends Component {
    constructor(props) {
        super(props);
        //    this.handleChange = this.handleChange.bind(this);
        //    this.handleClick = this.handleClick.bind(this);
    }

    state = {
        username: '',
        message: ''
    };

    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input type="text" name="username" onChange={this.handleChange} value={this.state.username}></input>
                <input type="text" name="message" onChange={this.handleChange} value={this.state.message} onKeyPress={this.handleKeyPress}></input>
                <button onClick={this.handleClick}>확인</button>
            </div>
        )
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleClick = () => {
        console.log("My name is " + this.state.username);
        console.log("Message : " + this.state.message);
        this.setState({message: '', username: ''});
    }

    handleKeyPress = (e) => {
        if (e.key == "Enter") {
            this.handleClick();
        }
    }
}