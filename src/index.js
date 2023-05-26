import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';
import { Router, Route, IndexRoute } from 'react-router'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Hello world!</div>,
    },
]);



ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/*<App />*/}
      {/*<Router>*/}
      {/*    <Route path = "/" component = {App}>*/}
      {/*        /!*<IndexRoute component = {Home} />*!/*/}
      {/*        <Route path = "home" component = {Home} />*/}
      {/*        <Route path = "about" component = {About} />*/}
      {/*    </Route>*/}
      {/*</Router>*/}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(sendToVercelAnalytics);
