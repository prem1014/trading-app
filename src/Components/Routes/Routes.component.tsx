import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import NavBar from '../Presentational/Navbar/Navbar.component';

import routesConfig from '../Routes/Config';

const AppRoute: React.FC = () => {
    return (
        <Router>
            <NavBar />
            <div className="row main">
                <div className="col-12">
                <Switch>
                {
                    routesConfig.map((route, i) => (
                        <Route key={i}
                            path={route.path}
                            component={route.component}
                        ></Route>
                    ))
                }
                <Redirect from="/" exact to="home" />
            </Switch>
                </div>
            </div>
        </Router>
    )
}

export default AppRoute;