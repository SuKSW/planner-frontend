import React from 'react';
import { NavLink } from "react-router-dom";

function SideNavbar(props) {
    return (
        <aside id="main-sidebar" class={props.class}>
            <nav class="menu has-text-weight-semibold">
                <ul class="menu-list">
                    <li>
                        <NavLink to='/' exact activeClassName="is-active">
                            <span class="menu-text">Dashboard</span>
                        </NavLink>
                    </li>
                </ul>
                <ul class="menu-list">
                    <li>
                        <NavLink to='/todos' activeClassName="is-active">
                            <span class="menu-text">Todos</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/appointments' activeClassName="is-active">
                            <span class="menu-text">Appointments</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/notes' activeClassName="is-active">
                            <span class="menu-text">Notes</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>

            <div id="sidebar-toggler">
                <span class="icon is-small"><i class="fa fa-angle-double-left"></i></span>
            </div>
        </aside>
    );
}

export default SideNavbar;