export default function fileupload(state = {data: ''}, action) {

    switch(action.type) {
        case 'UPLOAD_SUCCESS':
            return {...state, data: action.payload}
        case 'UPLOAD_FILE':
            return {...state, data: action.payload}
        default:
            return state
    }

}