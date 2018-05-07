import React from 'react'
import Card from './Card'
import LoginForm from './LoginForm'

class LoginPage extends React.Component {

    render() {
        return (
            <div className="container h-100">
                <div className="row justify-content-md-center h-100">
                    <Card>
                        <LoginForm />
                    </Card>
                </div>
            </div>
        );
    }
}

export default LoginPage