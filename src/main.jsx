import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "../src/locales/index.js"
import {BrowserRouter} from "react-router-dom";
import AppProvider from "./context/provider/Provider.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AppProvider>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </AppProvider>
    </React.StrictMode>,
)
