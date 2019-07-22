import React from 'react';
import classNames from "classnames/bind";
import styles from "./TodoInput.css";

const cx = classNames.bind(styles);
const TodoInput = ({value, onChange, onInsert}) => {
    const handleKeyPress = (e) => {
        if (e.key == 'Enter') {
            onInsert();
        }
    }
    return (
        <div className={cx('todo-input')}>
            <input onChange={onChange} value={value} onKeyPress={handleKeyPress}></input>
            <div className={cx('add-buttons')} onClick={onInsert}>추가</div>
        </div>
    )
}

export default TodoInput;