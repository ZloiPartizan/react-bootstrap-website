import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdbreact/dist/css/mdb.css';
import Navibar from "./Components/Navibar";


import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import {Home} from './Home';
import {About} from './About';
import {Users} from './Users';

function App() {
  return (
    <>
     <Router>
     <Navibar/>
     <Switch>
         <Route exact path="/" component={Home} />
         <Route path="/users" component={About} />
         <Route path="/about" component={Users} />
     </Switch>
     </Router>

    </>
  );
}

export default App;
