import React from 'react';

import './Navbar.component.scss';

const NavBar: React.FC<any> = (props: any) => {

    return (
        <div className="row">
            <div className="col-12">
                <nav className="navbar navbar-expand-sm navbar-dark fixed-top navbar-bg-color">
                    <a className="navbar-brand">Trading App</a>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link">Home</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default NavBar