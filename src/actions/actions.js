import * as types from '../constants/actionTypes';

//export each creator func
export const setUserActionCreator = (userName) => ({
  type: types.SET_USER,
  payload: userName,
})

export const addTaskActionCreator = (task) => ({
    type: types.ADD_TASK,
    payload: task,
  });

export const deleteTaskActionCreator = () => ({
    type: types.DELETE_TASK,
    payload: '//TBD',
  });

export const getTasksActionCreator = () => ({
    type: types.GET_TASKS,
  });

export const takeTaskActionCreator = (obj) => ({
    type: types.TAKE_TASK,
    payload: obj,
  });

export const updateTaskActionCreator = (taskObject) => ({
  type: types.UPDATE_TASK,
  payload: taskObject
})