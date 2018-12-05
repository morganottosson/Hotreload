import { combineReducers, createStore } from 'redux';
import { demoReducer } from './demo/reducer';
import { IDemoState } from './demo/types';
import { personReducer } from './person/reducer';
import { IPersonState } from './person/types';

export interface IRootState {
    demo: IDemoState,
    person: IPersonState
    
}

const rootReducer = combineReducers({
    demo: demoReducer,
    person: personReducer
});

const store = createStore<IRootState, any, any, any>(
    rootReducer
);

export default store;