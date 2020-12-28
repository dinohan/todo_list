import { ADD, DELETE } from './ActionTypes';

const addToDo = (text) => {
    const date = Date.now()
    return {
        type: ADD,
        text,
        id: date
    }
}

const deleteToDo = (id) => {
    return {
        type: DELETE,
        id: parseInt(id)
    }
}

export const actionCreators = {
    addToDo,
    deleteToDo
}