import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';
import AppContainer from "./container/AppContainer";
import Dashboard from "./components/Dashboard";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <AppContainer/>

            </div>
        </BrowserRouter>
    );
}

export default App;
