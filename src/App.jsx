import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Contactus from './Contactus';
import Home from './Home';
import Aboutus from './Aboutus';
import Error from './Error'
import Menu from './Menu'
//Fat arrow function
const App = () =>
{
    return(
                <>
                <Menu/>
                <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/contact" component={Contactus}/>
                        <Route exact path="/about" component={Aboutus} />
                        <Route component={Error}/>

                </Switch>
                </>
        );
};
export default App;