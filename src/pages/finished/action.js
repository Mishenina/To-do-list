import { get } from '../../utils/fetcher';
import { SET_APP_DATA } from '../../utils/actionTypes';

export function getAppData() {
  return (dispatch) => {
    get('mockapi/app.json')
      .then((response) => {
        dispatch({
          type: SET_APP_DATA,
          data: response.data.finished
        })
      })
  }
}
