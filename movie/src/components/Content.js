import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const ContentPadding = styled.p`
    padding-top: 0.6rem;
`;


function Content() {
    const [movies, setMovies] = useState([]);
    const [voteCounts, setVoteCounts] = useState([]);
    const URL = 'https://api.themoviedb.org/3/movie/now_playing?api_key=c62a78a0d2d87be14d317940c5c290b5';
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(URL);
            const data = res.data;
            setMovies(data["results"].map(movie => (
                {
                    title: movie["title"],
                    overview: movie["overview"],
                    poster: movie["poster_path"],
                    voteAvg: movie["vote_average"],
                    releaseDate: movie["release_date"]
                }
            )));
            setVoteCounts(data["results"].map(elem => elem["vote_count"]));
        }
        fetchData();
    }, [])
    return (
        <div className="section">
            <div className="container has-text-centered">
                <ul>
                    {movies.map((movie, idx) => <li key={idx}>{movie.title}</li>)}
                </ul>
                {/* <p className="subtitle">
                    Find your favorite movies here <span role="img" aria-label="kiss">😘</span>
                </p>
                <div className="field">
                    <div className="control">
                        <input className="input is-rounded" type="text" placeholder="Movie Name" />
                    </div>
                </div>
                <div className="level">
                    <div className="level-left">
                        <div className="level-item">
                            <button className="button is-primary is-rounded is-focused has-text-weight-semibold has-icons-left">Submit</button>
                        </div>
                    </div>
                    <div className="level-right">
                        <div className="level-item">
                            <a className="button is-link is-rounded  is-focused has-text-weight-semibold" href="https://www.themoviedb.org/">I want to have good time</a>
                        </div>
                    </div>
                </div> */}
                {/* <div className="level">
                    <div className="control">
                        <div className="level-item">
                            <ContentPadding>
                                <button className="button is-primary is-rounded is-focused has-text-weight-semibold has-icons-left">Submit</button>
                            </ContentPadding>
                        </div> */}

                {/* <div className="buttons is-right">
                    <div className="level-item">
                        <ContentPadding>
                            <a className="button is-link is-rounded  is-focused has-text-weight-semibold" href="https://www.themoviedb.org/">I want to have good time</a>
                        </ContentPadding>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Content;
