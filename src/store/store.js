import { createStore, applyMiddleware } from 'redux';
import asyncMiddleware from 'redux-thunk';
import rootReducer from '../reducers';

const createStoreWithMiddleware = applyMiddleware(asyncMiddleware)(createStore);
export const store = createStoreWithMiddleware(rootReducer);
