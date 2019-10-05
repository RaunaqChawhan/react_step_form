import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

class Success extends Component {

    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirm User Data" />
                    <h1>Thank you for your Submission</h1>
                    <p>You will get an email with further instructions</p>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}


export default Success;