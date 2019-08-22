import React from 'react';
import {Link} from "react-router";

export default class Signup extends React.Component{
    render() {
        return <div>
            <h1>Signup Here!</h1>
            Signup form here
            <Link to='/'>Have an account! </Link>
        </div>
    }
}