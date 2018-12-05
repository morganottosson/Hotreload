import { action } from 'typesafe-actions';
import { Constants } from './types';

export function sendForm(form: object) {
    return action(Constants.SENDFORM, {
        form
    });
}

export function setLoading(loading: boolean) {
    return action(Constants.SET_LOADING, {
        loading
    });
}