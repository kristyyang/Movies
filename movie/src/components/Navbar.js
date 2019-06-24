import React from 'react'
import styled from 'styled-components';


const NarbarTitle = styled.p`
    padding-top: 0.6rem;
    padding-left:0.4rem;
`;

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar has-shadow is-fixed-top">
                <div className="navbar-brand">
                    <div className="narbar-item">
                        <NarbarTitle className="title">AquaNow Movie Theatre <span role="img" aria-label="popcorn">🍿</span></NarbarTitle>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;
