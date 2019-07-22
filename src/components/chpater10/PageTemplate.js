import React from 'react'
import classNames from "classnames/bind";
import styles from "./PageTemplate.css";

const cx = classNames.bind(styles);


const PageTemplate = ({children}) => {
    return (
        <div className={cx('page-template')}>
            <h1>일정관리</h1>
            <div className={cx('content')}>
                {children}
            </div>
        </div>
    )
}

export default PageTemplate