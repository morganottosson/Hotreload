import { Constants, PersonActions, IPersonState } from './types';

const init: IPersonState = {
    form: null,
    loading: false
};

export function personReducer(state: IPersonState = init, 
action: PersonActions): IPersonState {
    switch (action.type) {
        case Constants.SET_LOADING:
            return {
                ...state,
                ...action.payload
            };
        case Constants.SENDFORM:
                return {
                    ...state,
                    form: {...action.payload.form}
                };
        default:
            return state;
    }
}