import * as types from '../constants/actionTypes';

//declare an initial state
const initialState = {
  usersList: [],
  currentUser: '',
  arrOfTasks: [],
};

const taskManagerReducer = (state = initialState, action) => {
  let usersList = state.usersList.slice();
  let arrOfTasks = state.arrOfTasks.slice();
  const url = 'http://localhost:3000/task';

  switch (action.type) {
    case types.SET_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    case types.GET_TASKS:
      //get req
      fetch(url)
        .then((arrOfObjs) => arrOfObjs.json())
        .then((arrOfObjs) => {
          arrOfTasks = arrOfObjs;
          arrOfObjs.forEach((obj) => {
            //check that it is .user and not .User or something
            if (!usersList.includes(obj.user)) usersList.push(obj.user);
          });
        });
      //return state with all updated variables, except user
      return {
        ...state,
        arrOfTasks,
        usersList,
      };

    case types.ADD_TASK:
    //post req
    //reqBody-
    //send username - users[0];
    //task is payload
    //status 0
    //payload must be task
    //push task obj into unassignedTasks
    //return object with state and updated unassignedTasks

    case types.TAKE_TASK:
      //send a patch req
      fetch(url, {
        method: 'PATCH',
        body: JSON.stringify(action.payload),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((obj) => {
          // locate old task
          //iterate thru tasks, check for object with matching task id
          //replace to with the obj you get back from path req

          for (let i = 0; i < arrOfTasks.length; i++) {
            if (arrOfTasks[i].task_id === obj.task_id) arrOfTasks[i] = obj;
          }
        })
        .catch((error) => {
          throw new Error('Error while taking task');
        });

      return {
        ...state,
        arrOfTasks,
      };
    default: {
      return state;
    }
  }

  // })

  //payload is the whole object)
  //reqBody-
  //username state
  //task from payload
  //user task id from payload
  //status 1
  //remove it from the unassigned array
  //add it to toDo array
  //return object with updated state vars

  //         case types.UPDATE_TASK:

  //         case types.DELETE_TASK:

  //         default: {
  //             return state;
  //         }

  //     }
};

export default taskManagerReducer;
