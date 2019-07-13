import React from 'react';

const MyName = ({name})=>{
    return <div>안녕하세요 제이름은 {name}</div>;
};

MyName.defaultProps = {
    name: "junah"
}

export default MyName;
// 함수형 컴포넌트 선언