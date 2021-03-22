import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { SnackbarProvider } from 'notistack';

const app = document.createElement("div");
app.id = "rootChromeExtn";
document.body.appendChild(app);

const style = document.createElement('style');
style.innerHTML = `
      #rootChromeExtn {
        position: fixed;
        z-index: 10000;
        padding: 10px;
        right: 0;
        top: 100px;
        width: 350px;
        bottom: 0;
        border-radius: 10px;
        box-shadow: inset 0 0 1000px #aaa;
      }
    `;
document.head.appendChild(style);

ReactDOM.render(
  <React.StrictMode>
    <SnackbarProvider anchorOrigin={{horizontal:'right',vertical:'top'}} dense={true} maxSnack={3}>
      <App app={app} />
    </SnackbarProvider>
  </React.StrictMode>,
  document.getElementById('rootChromeExtn')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
