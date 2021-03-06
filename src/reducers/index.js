import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import EmployFormReducer from './EmployeeFormReducer';

export default combineReducers( {
    auth: AuthReducer,
    employeeForm: EmployFormReducer
});