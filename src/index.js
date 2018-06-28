import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/main';
import Appstore from './store/appstore';
import { Provider } from 'react-redux';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';



ReactDOM.render(<Provider store={Appstore}>
    <Main />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
