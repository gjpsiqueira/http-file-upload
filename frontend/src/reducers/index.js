import { combineReducers } from 'redux'
import auth from './authReducer'
import fileupload from './fileuploadReducer'

const rootReducer = combineReducers({auth,fileupload})

export default rootReducer