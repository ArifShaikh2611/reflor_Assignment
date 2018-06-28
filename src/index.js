import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/main';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';



ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
