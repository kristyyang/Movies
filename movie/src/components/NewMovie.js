import React from 'react';
import styled from 'styled-components';

const Title = styled.a`
  :hover {
    text-decoration: underline;
  }
`;

const ReleaseD = styled.h1`
margin-bottom:0px;
font-size: 1.5em;
text-align: right;
`;

const Rating = styled.h1`
font-weight: bold;
font-size: 1.2em;
    color: ${props => {
        const rating = props.rating;
        if (rating > 8) {
            return 'green'
        } else if (rating < 5) {
            return 'red';
        } else {
            return 'orange';
        }
    }};
`


function NewMovie({ key, image, title, description, rate, date }) {
    return (
        <article className="box">
            <div className="media">
                <aside className="media-left">
                    <img src={image} className="image" width="150" />
                </aside>
                <div className="media-content">
                    <Title className="title is-5 is-spaced is marginless ">
                        {title}
                    </Title>

                    <div className="content is-small">{description}</div>
                </div>
                <div className="level">
                    <div className="level-right">
                        <div className="level-item">
                            <Rating rating={rate}>{rate}</Rating>
                        </div>
                    </div>
                </div>

            </div>
            <ReleaseD>
                <div className="title is-6">
                    <h1>Rease date: {date}</h1>
                </div>
            </ReleaseD>
        </article>
    );
}



export default NewMovie;
