import React from 'react'
import UploadForm from './UploadForm'
import NavMenu from './NavMenu'

class Dashboard extends React.Component {

    render() {

        return (
            <div className="dashboard-app">
                <NavMenu />
                <UploadForm />
            </div>
        );
    }
}

export default Dashboard