import React from 'react';
import ReactDOM from 'react-dom';
import Body from './components/body';
import Appstore from './store/appstore';
import { Provider } from 'react-redux';
import { BrowserRouter} from 'react-router-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';



ReactDOM.render(<Provider store={Appstore}>
    <BrowserRouter>
    <Body/>
    </BrowserRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
