import { action } from 'typesafe-actions';
import { Constants, IForm } from './types';
import axios from 'axios';
import { Dispatch } from 'redux';

export function sendForm(form: IForm) {
    return action(Constants.SENDFORM, {
        form
    });
}

/*
export const sendForm = (form: IForm) => {
    return (dispatch: Dispatch) => {
        dispatch(addTodoStarted())
        axios.post(`https://localhost:3200`, {
            form
        })
        .then(res => {
            dispatch(addTodoSuccess(res.data))
        })
        .catch(err => {
            dispatch(addTodoFailure(err.message))
        })
    }
}

const addTodoSuccess = (form: IForm) => ({
    type: Constants.ADD_TODO_SUCCESS,
    payload: {
      ...form
    }
  });
  
  const addTodoStarted = () => ({
    type: Constants.ADD_TODO_STARTED
  });
  
  const addTodoFailure = (error: any) => ({
    type: Constants.ADD_TODO_FAILURE,
    payload: {
      error
    }
  });
*/
export function setLoading(loading: boolean) {
    return action(Constants.SET_LOADING, {
        loading
    });
}
