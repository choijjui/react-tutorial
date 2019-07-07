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

    render() {
        return (
            <Fragment>
                <div>
                    My name is {this.props.name}
                </div>
                <div>
                    age is {this.props.age}
                </div>
            </Fragment>

        )
    }
}

export default MyComponent