import { action } from 'typesafe-actions';
import { Constants, IForm } from './types';

export function sendForm(form: IForm) {
    return action(Constants.SENDFORM, {
        form
    });
}

export function setLoading(loading: boolean) {
    return action(Constants.SET_LOADING, {
        loading
    });
}