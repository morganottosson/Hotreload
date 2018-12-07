import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export interface IForm {
    PersonNr: string,
}

export interface IPersonState {
    form: IForm
    loading: boolean
}

export enum Constants {
    SENDFORM = 'SENDFORM',
    SET_LOADING = 'SET_LOADING',
}

export type PersonActions = ActionType<typeof actions>;
