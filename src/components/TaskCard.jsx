import React from 'react';
import {useDispatch} from 'react-redux';
import * as actions from '../actions/actions.js';
import store from '../store';


const TaskCard = (prop) => { // take in the task object as prop.task
    const dispatch = useDispatch();
    const user = store.getState().currentUser

    const demoteTask = () => {
        if (prop.task.status > 1) {
            const newStatus = prop.task.status - 1;
            const newObj = {...prop.task, status : newStatus};
            return dispatch(action.updateTaskActionCreator(newObj))
        }
    };

    const changeUser = () => {
        return dispatch(actions.takeTaskActionCreator(user))
    };

    const promoteTask = () => {
        if (prop.task.status < 4) {
            const newStatus = prop.task.status + 1;
            const newObj = {...prop.task, status : newStatus};
            dispatch(action.updateTaskActionCreator(newObj))
        }
    };

    return (
        <div>
            <p className='taskName'> Task: {prop.task.task} </p>
            <p className='createdBy'> Created by: {prop.task.creator}</p>
            <p className='assignedTo'> Assigned to: {prop.task.user}</p>
            <div className='buttons'>
                <button onClick={demoteTask()}></button>
                <button onClick={changeUser()}>Change User</button>
                <button onClick={promoteTask()}></button>
            </div>
            
        </div>
    )
}

export default TaskCard