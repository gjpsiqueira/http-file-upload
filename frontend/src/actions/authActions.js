import axios from 'axios'

export function doLogin(username,password) {

    return function(dispatch) {

        let url = 'http://localhost:8080/login'

        axios.post('http://localhost:8080/login', {username: username, password: password})
            .then((response) => {
                console.log(response)
                localStorage.removeItem( "token" ) 
                localStorage.setItem( "token", response.data.token );                    
                dispatch({type: 'IS_AUTHENTICATED', payload: response.data})
            }).catch((err) => {
                dispatch({type: 'LOGIN_FAILED', payload: null})
            })
    }

    return null

  
}


export function checkLoggedIn() {
    return function(dispatch) {
        let url =  'http://localhost:8080/adm'
        var config = {
            headers: {'Authorization':  'Bearer ' + localStorage.getItem( "token" )}
        };

        axios.get(url,config)
            .then((response) => {
                console.log(response)
                dispatch({type: 'IS_AUTHENTICATED', payload: response.data})
            })
            .catch((err) => {
                console.log(err)
                dispatch({type: 'IS_NOT_AUTHENTICATED', payload: null})
            })
    }
}

export function doLogout() {
    localStorage.removeItem("token")
    return {
        type: "IS_NOT_AUTHENTICATED",
        payload: ''
    }
}