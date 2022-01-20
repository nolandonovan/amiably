import * as React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';

'use strict';
const e = React.createElement;

class ListComponet extends Component {
    
    render() { 
        return ( <h1>Hello World</h1> );
    }
}
 
const domContainer = document.querySelector('#listComponet');
ReactDOM.render(e(ListComponet), domContainer);



