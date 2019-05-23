import { get } from '../../utils/fetcher';
import { SET_APP_DATA, ADD_TASK } from '../../utils/actionTypes';

export function getAppData() {
  return (dispatch) => {
    get('mockapi/app.json')
      .then((response) => {
        dispatch({
          type: SET_APP_DATA,
          data: response.data.today
        })
      })
  }
}


export function addTask(newTask) {
    return (dispatch) => {
        dispatch({
            type: ADD_TASK,
            newTask: newTask
        })
    }
}