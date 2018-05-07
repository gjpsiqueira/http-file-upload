import React from 'react'
import Card from './Card'
import LoginForm from './LoginForm'

class LoginPage extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="row justify-content-md-center">
                    <Card>
                        <div className="form_bg">
                            <LoginForm />
                        </div>
                    </Card>
                </div>
            </div>
        );
    }
}

export default LoginPage