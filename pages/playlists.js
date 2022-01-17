import { useState } from "react";
import dynamic from "next/dynamic";
import axios from "axios";

const Sidebar = dynamic(() => import('../components/sidebar'))
const Title = dynamic(() => import('../components/title'))
const TrackList = dynamic(() => import('../components/tracklist'))

const Playlists = (props) => {
    const [playlists, setPlaylists] = useState(props.playlists)
    const [currentPlaylist, setCurrentPlaylist] = useState(props.playlists[0])
    const [currentTracks, setCurrentTracks] = useState(props.tracks)

    const addPlaylist = async (playlist) => {
        const id = playlists[playlists.length - 1].id + 1
        setPlaylists([...playlists, { id: id, name: playlist, img: null }])
        const options = {
            method: 'POST',
            url: 'http://localhost:3000/api/addplaylist',
            params: { id: id, name: playlist }
        };

        const res = await axios(options);
        const log = await res.data;
        console.log(log)
    }

    const selectPlaylist = async (i) => {
        setCurrentPlaylist(playlists[i])

        const options = {
            method: 'POST',
            url: 'http://localhost:3000/api/gettracks',
            params: { playlist: playlists[i].id }
        };

        const res = await axios.request(options);
        const tracks = await res.data;
        setCurrentTracks(tracks)
    }

    return (<div className="h-screen bg-purple-100 flex justify-center items-center">
        <div className="bg-white w-5/6 h-5/6 rounded-2xl shadow-2xl flex gap-x-8 px-8 py-8">
            <Sidebar playlists={playlists} addplaylist={addPlaylist} selectplaylist={selectPlaylist} />
            <div className="border-2 border-gray-500 w-5/6 h-full rounded-lg flex flex-row flex-wrap gap-y-8 px-8 py-8 overflow-y-auto">
                <Title current={currentPlaylist} total={currentTracks.length} />
                <TrackList tracks={currentTracks} />
            </div>
        </div>
    </div>);
}

export default Playlists;

export async function getServerSideProps() {
    var options = {
        method: 'GET',
        url: 'http://localhost:3000/api/getplaylists',
    };

    var res = await axios.request(options);
    const playlists = await res.data;

    options = {
        method: 'GET',
        url: 'http://localhost:3000/api/gettracks',
        params: {playlist: 1}
    }

    res = await axios.request(options);
    const tracks = await res.data;

    return { props: { playlists: playlists, tracks: tracks } }
}