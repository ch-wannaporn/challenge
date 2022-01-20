import axios from 'axios';
import { useState } from 'react';
import Form from '../components/form'

const Theatre = (props) => {
    const [movies, setMovies] = useState(
        props.movies
            .map(item => item.name)
            .filter((item, index, self) => self.indexOf(item) === index)
    );
    const [showtimes, setShowtimes] = useState(props.movies);

    return (
        <div className="bg-seat-theatre relative">
            <div className="absolute z-10 top-12 left-24">
                <span className="text-white shadow-2xl text-8xl font-serif">My Theatre</span>
                <br/><br/>
                <span className="text-gray-300 shadow-lg text-2xl font-serif">— Book fast, Watch faster.</span>
            </div>
            <Form movies={movies} showtimes={showtimes}/>
        </div>
    );
}

export default Theatre;

export async function getServerSideProps() {
    var options = {
        method: 'GET',
        url: 'http://localhost:3000/api/getmovies',
    };

    var res = await axios.request(options);
    const movies = await res.data;

    return { props: {movies: movies} }
}