export default function auth(state = {authenticated: false, failed: false, isLoggedIn: false, userData:null }, action) {

    switch(action.type) {
        case 'IS_AUTHENTICATED': 
            return {
                ...state,
                authenticated: true,
                failed: false, 
                isLoggedIn: true,
                userData: action.payload
            }
        case 'IS_NOT_AUTHENTICATED':
            return {...state, authenticated: false, failed: true, isLoggedIn: false, userData: null}
        default:
            return state
    }
}