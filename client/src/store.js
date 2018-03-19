import {createStore} from 'redux';
import WizardReducer from './Reducers/WizardReducer';
// import LoginReducer from './Reducers/LoginReducer';

export default createStore(WizardReducer)