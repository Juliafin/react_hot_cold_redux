import {createStore} from 'redux';

import hotColdReducer from './reducers/hot_cold_reducer';

export default createStore(hotColdReducer);