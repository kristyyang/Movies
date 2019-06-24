import React from 'react'
import styled from 'styled-components';


const PBottom = styled.div`
    padding-bottom: 0.0rem;
`;
function Footer(params) {
    return (

        <div className="section">
            <footer className="footer">

                <div className="content has-text-centered">
                    <PBottom><p>
                        <strong>AquaNow Movie theatre</strong> by <a href="https://jgthms.com">Kristy Yang</a>. The source code is licensed
      <a href="http://opensource.org/licenses/mit-license.php"> MIT</a>
                    </p></PBottom>
                </div>
            </footer>
        </div>
    )
}

export default Footer;
