import React from 'react'
import ReactDOM from 'react-dom'
import AddTask from "./Components/AddTask";
import ShowTask from './Components/ShowTask';
import store from './Components/Data/Store/index';
import { Provider } from 'react-redux'
import './index.scss'

const App = () => {
    return (
        <div className="app">
            <AddTask></AddTask>
            <ShowTask></ShowTask>
        </div>
    )
}

const ROOT = document.querySelector("#root");
ReactDOM.render(<Provider store={store}><App /></Provider>, ROOT);