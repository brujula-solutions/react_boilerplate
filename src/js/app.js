import React from 'react';
import ReactDOM from 'react-dom';

import styles from './style.css';
import BillingPerTimeMain from './components/charts/BillingPerTimeMain/BillingPerTimeMain';


const App = () => (
  <div className="appClass">
    <BillingPerTimeMain />
  </div>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
