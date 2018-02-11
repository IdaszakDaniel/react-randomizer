import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Route} from 'react-router';
import { BrowserRouter } from 'react-router-dom';

const router = (
    <BrowserRouter>
        <div>
            <Route path="/" component={App}/>
        </div>
    </BrowserRouter>
  );

render(router, document.getElementById('root'));
registerServiceWorker();
