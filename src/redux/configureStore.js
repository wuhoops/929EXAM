import {createStore, combineReducers} from 'redux';
import { Photos } from './photos';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            photos: Photos,
        })
    );

    return store;

}
