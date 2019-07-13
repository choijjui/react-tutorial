import React, {Component} from 'react';
import './Validation.css'

/**
 * ref 사용법
 */
class Validation extends Component {

    state = {
        password : '',
        clicked: false,
        validated: false
    }

    render() {
        return (
            <div>
                <input ref={(ref)=>this.input = ref}
                       type="password"
                       value={this.state.password}
                       className={this.state.clicked ? (this.state.validated ? 'success': "fail") : ""}
                       onChange={this.handleInputChange}>
                </input>
                <button onClick={this.handleButtonClick}>확인</button>
            </div>
        );
    }

    handleInputChange = (e) =>{
        this.setState({password : e.target.value});
    }

    handleButtonClick = ()=>{
        this.setState({
            clicked: true,
            validated: this.state.password === '0000' ? true : false
        });
        if(!this.state.validated){
            this.input.focus();
        }
    }

}

export default Validation;