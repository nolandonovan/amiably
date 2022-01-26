import * as React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';


export class Box extends React.Component {
    render () {
        return (
            
            <div>
                <h1>React</h1> 
                <h1>React2</h1>
            </div>
            
        );
    } 
 };
 
 ReactDOM.render(<Box />, document.getElementById("box"));