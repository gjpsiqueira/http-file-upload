import axios from 'axios'

export function upload(file) {
    
    return function(dispatch) {
        const formData = new FormData();
        formData.append('file',file)
        formData.append('observacao','teste')

        const config = {
            headers: {
                'content-type': 'multipart/form-data',
                'Authorization':  'Bearer ' + localStorage.getItem( "token" )
            }
        }

        let url =  'http://localhost:8080/uploadFile'
        axios.post(url,formData,config)
        .then((response) => {
            console.log(response)
        })
        .catch((err) => {
            console.log(err)
        })
    }
}