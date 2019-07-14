import React, {Component, Fragment} from 'react';

class IterationSample extends Component {

    state = {
        names: ['눈', '바람', '눈사람', '얼음']
    };

    render() {
        const nameList = this.state.names.map((name, index) => (
            <li key={index} onDoubleClick={() => this.handleRemove(index)}>{name}</li>));

        return (
            <Fragment>
                <input type="text" ref={(ref) => this.input = ref}></input>
                <button onClick={this.handleButtonClick}>추가</button>
                <ul>
                    {nameList}
                </ul>
            </Fragment>

        );
    }

    handleButtonClick = () => {
        this.setState({names: this.state.names.concat(this.input.value)});
        this.input.value = '';
    }

    handleRemove = (index) => {
        const names = this.state.names;

        // 1. es6 이용
        // this.setState({
        //     names: [...names.slice(0,index), ...names.slice(index+1, names.length)]
        // });

        // 2. filter 이용
        this.setState({names: this.state.names.filter((item, i)=> i!==index)})
    }
}

export default IterationSample;