import React from 'react';
import {browserHistory} from "react-router";

export default class Link extends React.Component{
     onLogout(){
        browserHistory.push('/')
    }

    render() {
        return <div>
            <p>Link component here</p>
            <button onClick={this.onLogout.bind(this)}>Signin page</button>
        </div>

    }
}