import { SET_APP_DATA } from '../../utils/actionTypes';

export default (state = {}, action) => {
    switch (action.type) {

        case SET_APP_DATA: {
            return {
                ...state,
                data: action.data
            }
        }
        case ADD_TASK: {
            return {
                ...state,
                data: [action.newTask, ...state.data]
            }
        }
        default: {
            return state;
        }
    }
}
