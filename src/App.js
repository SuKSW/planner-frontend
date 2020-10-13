import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';

import { Dashboard, Todos, Appointments, Notes } from './components/main'
import TopNavbar from './components/sections/topNavbar'
import SideNavbar from './components/sections/sideNavbar'

function App() {
    return (
        <React.StrictMode>
            {/* Todo: show only after login */}
            <TopNavbar />
            <div class="columns is-gapless">
                <SideNavbar class="column pf-sidenav is-2 is-hidden-touch" />
                <main class="column pf-main">
                    <div>
                        <Switch>
                            <Route path="/" component={Dashboard} exact />
                            <Route path="/todos" component={Todos} />
                            <Route path="/appointments" component={Appointments} />
                            <Route path="/notes" component={Notes} />
                    </Switch>
                    </div>
                </main>
            </div>
        </React.StrictMode>
    );
}

export default App;
