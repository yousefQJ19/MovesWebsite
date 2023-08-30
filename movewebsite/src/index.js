import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {RenderNameList} from './Components/RenderPhoto'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App person={{
      name:"yousef samara",size:80
    }}/>
    <App person={{
      name:"yousef samara",size:80
    }}/>
    <App person={{
      name:"yousef samara",size:80
    }}/> */}
    <RenderNameList name="kol 5ra 5ray bojak"/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
