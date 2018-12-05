import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export interface IPersonState {
    form: object
    loading: boolean
}

export enum Constants {
    SENDFORM = 'SENDFORM',
    SET_LOADING = 'SET_LOADING',
}

export type PersonActions = ActionType<typeof actions>;
