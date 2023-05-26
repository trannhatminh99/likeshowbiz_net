import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';
import Home from "./Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";



ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/:id" element={<Home />}>
              </Route>
          </Routes>

      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(sendToVercelAnalytics);
