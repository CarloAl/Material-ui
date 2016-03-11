/**
 * App entry point
 */

// Polyfill
import 'babel-polyfill';

// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import MenuItem from 'material-ui/lib/menus/menu-item';
import LeftNav from 'material-ui/lib/left-nav';
import Main from './common/components/Main';
import LeftNavUndockedExample from './common/components/LeftNavUndockedExample'
import { Router, browserHistory } from 'react-router';

// Routes
import Routes from './common/components/Routes';

// Base styling
import './common/base.css';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

// ID of the DOM element to mount app on
const DOM_APP_EL_ID = 'app';

// Render the router
//ReactDOM.render((
//  <Router history={browserHistory}>
//    {Routes}
//  </Router>
//), document.getElementById(DOM_APP_EL_ID));

function test(){
    alert("test");
}

ReactDOM.render(<Main/>
, document.getElementById(DOM_APP_EL_ID));

