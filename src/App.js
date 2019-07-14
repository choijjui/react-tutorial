//import React, {Fragment} from 'react';
//import './App.css';
import MyComponent from "./components/chapter1_4/MyComponent";
import EventPractice from "./components/chapter1_4/EventPractice";
import Validation from "./components/chapter5/Validation";
import IterationSample from "./components/chapter6/IterationSample";
import LifeCycleSample from "./components/chapter7/LifeCycleSample";

// export default function App() {
//     return (
//         //<MyComponent age={28}></MyComponent>
//         //<EventPractice></EventPractice>
//         //<Validation></Validation>
//         //<IterationSample></IterationSample>
//         //<LifeCycleSample></LifeCycleSample>
//     );
// }

import React, {Component} from 'react';

class App extends Component {
    state = {
        color : ''
    }
    render() {
        return (
            <div>
                <button onClick={this.handleButtonClick}>발생</button>
                <LifeCycleSample color={this.state.color}></LifeCycleSample>
            </div>
        );
    }

    handleButtonClick = ()=>{
        this.setState({color: this.randomColor()})
    }

    randomColor() {
        return "#" + Math.floor(Math.random() * 16777215).toString(16)
    }
}

export default App;