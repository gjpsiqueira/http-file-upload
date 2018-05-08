import React from 'react'
import UploadForm from './UploadForm'

class Dashboard extends React.Component {

    render() {

        return (
            <div className="dashboard-app">
                <UploadForm />
            </div>
        );
    }
}

export default Dashboard