import React from 'react'
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import './Navbar.sass'


class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar has-shadow is-fixed-top">
                <nav className="navbar" role="navigation" aria-label="dropdown navigation">
                    <div className="navbar-item has-dropdown is-active">
                        <h1>Code goes here...</h1>
                    </div>
            </nav>

            </nav >
        )
    }
}

ReactDOM.render(
    <Navbar />,
    document.getElementById('root')
);

export default Navbar;
