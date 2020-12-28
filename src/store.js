import { createStore } from 'redux';

// Action
const ADD = "ADD";
const DELETE = "DELETE";

const addToDo = (text) => {
    return {
        type: ADD,
        text,
        data: Date.now()
    }
}

const deleteToDo = (id) => {
    return {
        type: DELETE,
        id
    }
}
export const actionCreators = {
    addToDo,
    deleteToDo
}

// reducer
const reducer = (state = [], action) => {
    switch (action.type) {
        case ADD:
            return [{ text: action.text, id: action.date }, ...state];
        case DELETE:
            return state.filter(toDo => toDo !== action.id);
        default:
            return state;
    }
}

//store
const store = createStore(reducer);

export default store;