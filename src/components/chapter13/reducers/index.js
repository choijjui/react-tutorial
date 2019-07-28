import * as types from '../actions/ActionTypes';

const initialState = {
    color: 'black',
    number: 0
}

/**
 * 리듀서 함수를 정의한다. 파라미터로 state와 action을 받는다.
 * 이 떄 주의할 점으로는 state를 직접 수정하면 안되고, 새로운 객체를 만들어서 반환해야 한다.
 * @param state
 * @param action
 * @returns {{number: number, color: string}|({} & {number: number, color: string} & {number: number})}
 */
/*
function counter(state=initialState, action) {
    switch(action.type) {
        case types.INCREMENT:
            return Object.assign({}, state, {number: state.number + 1})
        case types.DECREMENT:
            return Object.assign({}, state, {number: state.number - 1})
        default:
            return state
    }
}

export default counter;
*/


import {combineReducers} from 'redux';
import number from './number';
import color from './color';

const reducers = combineReducers({
    numberData: number,
    colorData: color
})
export default reducers

