import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from '../actions';

function ToDo({ text, id, onBtnClick }) {
    return <li>
        <Link to={`/${id}`}>
            {text}
            <button onClick={onBtnClick}>DEL</button>
        </Link>
    </li>
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id))
    };
}

export default connect(null, mapDispatchToProps)(ToDo);