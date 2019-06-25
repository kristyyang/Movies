import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import NewMovie from './NewMovie';

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
                    poster: `https://image.tmdb.org/t/p/w500${movie["poster_path"]}`,
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
            <section className="hero is-fullheight has-background-light">
                <div className="hero-body">
                    <div className="columns is-multiline">
                        {movies && movies.map((movie, idx) => (
                            <div className="column is-12-tablet is-6-desktop is-4-widescreen">
                                <NewMovie
                                    key={idx}
                                    image={movie.poster}
                                    title={movie.title}
                                    description={movie.overview}
                                    rate={movie.voteAvg}
                                    date={movie.releaseDate} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <div className="container has-text-centered">
                <ContentPadding>
                    <p className="subtitle">
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
                    </div>
                </ContentPadding>
            </div>
        </div>
    )
}

export default Content;
