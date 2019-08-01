import * as types from './ActionTypes'

export const create = (color) => ({
    type: types.CREATE,
    color
})

export const remove = (index) => ({
    type: types.REMOVE,
    index
})

export const increment = (index) => ({
    type: types.INCREMENT,
    index
})

export const decrement = () => ({
    type: types.DECREMENT
})

export const setColor = ({index, color}) => ({
    type: types.SET_COLOR,
    index,
    color
})