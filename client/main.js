import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';

import Signup from "../imports/ui/Signup";

Meteor.startup(() => {
  // code to run on client at startup
    ReactDOM.render(<Signup/>,document.getElementById('app'));
});

