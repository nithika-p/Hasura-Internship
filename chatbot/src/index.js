import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Aadhaar from './aadhaar-search';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

ReactDOM.render(
   <BrowserRouter>
        <div>
            <Switch>
                <Route path="/aadhaar" component={Aadhaar}/>
                <Route exact path="/" component={App}/>
            </Switch>
        </div>
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
