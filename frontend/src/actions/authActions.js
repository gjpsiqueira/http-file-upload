import axios from 'axios'

export function doLogin(username,password) {

    return function(dispatch) {

        let url = 'http://localhost:8080/login'

        var config = {
            headers: { 'Content-Type':'application/x-www-form-urlencoded' },
            body: `username=gustavo&password=123456`

        };

        axios.post('http://localhost:8080/login', config)
            .then((response) => {
                console.log(response)
                dispatch({type: 'IS_AUTHENTICATED', payload: response.data})
            }).catch((err) => {
                console.log(err)
            })
    }

  
}