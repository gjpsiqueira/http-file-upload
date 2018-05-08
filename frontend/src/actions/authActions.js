import axios from 'axios'

export function doLogin(username,password) {

    return function(dispatch) {

        let url = 'http://localhost:8080/login'

        axios.post('http://localhost:8080/login', {username: username, password: password})
            .then((response) => {
                console.log(response)
                dispatch({type: 'IS_AUTHENTICATED', payload: response.data})
            }).catch((err) => {
                dispatch({type: 'IS_NOT_AUTHENTICATED', payload: null})
            })
    }

  
}