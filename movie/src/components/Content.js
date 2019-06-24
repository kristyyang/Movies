import React from 'react';
import styled from 'styled-components';

// const Content_padding = styled.p`
//     padding-top: 0.6rem;
// `;


function Content() {
    return (
        <div className="section">
            <div className="container has-text-centered">
                <p className="subtitle">
                    Find your favorite movies here <span role="img" aria-label="kiss">😘</span>
                </p>
                <div className="field">
                    <div className="control">
                        <input className="input is-success" type="text" placeholder="Movie Name" />
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <input className="input is-rounded" type="text" placeholder="Rounded input" />
                    </div>
                </div>
                {/* <div className="control">
                    <Content_padding>
                        <button className="button is-primary is-rounded is-focused has-text-weight-semibold has-icons-left">Submit</button>
                    </Content_padding>
                </div>
                <div className="buttons is-centered">
                    <Content_padding>
                        <a className="button is-link is-rounded  is-focused has-text-weight-semibold" href="https://www.themoviedb.org/">I want to have good time</a>
                    </Content_padding>
                </div> */}
            </div>
        </div >
    )
}

export default Content;
