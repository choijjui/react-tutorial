import React, {Component, Fragment} from "react";
import PropTypes from 'prop-types';

class MyComponent extends Component {
    // props 의 기본값을 설정해주는 부분
    static defaultProps = {
        name: "Choi Jun ah"
    }

    // props 의 기본 타입을 지정해주 기능으로 validation 체크 할떄 사용해도 좋을듯
    // 또한 다양하게 object 체크 할 수 있다 (string, number, array, element, object ... )
    static propTypes = {
        name: PropTypes.string,
        age : PropTypes.number.isRequired
    }

    constructor(props) {
        super(props);
        /*this.state = {
            number: 0
        }*/
    }

    state = {
        number: 0
    }

    render() {
        return (
            <Fragment>
                <div>
                    My name is {this.props.name}
                </div>
                <div>
                    age is {this.props.age}
                </div>
                <div>
                    숫자 : {this.state.number}
                </div>
                <button onClick={this.onBtnClick()}>더하기</button>
            </Fragment>

        )
    }

    onBtnClick() {
        // 컴포넌트라 리렌더링하도록하는 트리거 역할
        // this.forceUpdate()를 이용하여 강제로 리렌더링을 할 수 있지만, 매우 비효율적인 방법
        // NOTE : 배열의 경우 객체 사본을 만들고, 그 사본에 값을 업데이트한 후 사본으로 값을 설정하는 방식
        this.setState({number: this.state.number+1})
    }
}

export default MyComponent