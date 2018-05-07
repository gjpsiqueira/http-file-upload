export default function auth(state = {authenticated: false, failed: false, userData:null }, action) {

    switch(action.type) {
        case 'IS_AUTHENTICATED': 
            return {...state, authenticated: true, failed: false, userData: action.payload}
        default:
            return state
    }
}