import React from 'react';
import { Link } from "react-router-dom";

function TopNavbar() {
    document.addEventListener('DOMContentLoaded', () => {
        // Get all "navbar-burger" elements
        const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

        if ($navbarBurgers.length > 0) {                // Check if there are any navbar burgers
            $navbarBurgers.forEach(el => {             // Add a click event on each of them
                el.addEventListener('click', () => {
                    // Get the target from the "data-target" attribute
                    const target = el.dataset.target;
                    const $target = document.getElementById(target);

                    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                    el.classList.toggle('is-active');
                    $target.classList.toggle('is-active');
                });
            });
        }

    });

    return (
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <div class="navbar-item is-size-3">
                    Planner
                </div>

                <div role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </div>
            </div>

            <div id="navbarBasicExample" class="navbar-menu is-hidden-desktop">
                <div class="navbar-end">
                    <Link to='/' exact class="navbar-item">Dashboard</Link>
                    <Link to='/todos' exact class="navbar-item">Todos</Link>
                    <Link to='/appointments' exact class="navbar-item">Appointments</Link>
                    <Link to='/notes' exact class="navbar-item">Notes</Link>
                </div>
            </div>
        </nav>
    );
}

export default TopNavbar;
