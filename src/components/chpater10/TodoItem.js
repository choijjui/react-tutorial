import React, {Component} from 'react';
import styles from "./TodoItem.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

class TodoItem extends Component {
    render() {
        const {done, children, onToggle, onRemove} = this.props;

        return (
            <div className={cx('todo-item')} onClick={onToggle}>
                <input className={cx('tick')} readOnly type="checkbox" checked={done}></input>
                <div className={cx('text', {done})}>{children}</div>
                <div className={cx('delete')} onClick={onRemove}>지우기</div>
            </div>
        );
    }
}

export default TodoItem;