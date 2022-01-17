import { useState } from "react";
import dynamic from "next/dynamic";
import axios from "axios";

const Sidebar = dynamic(() => import('../components/sidebar'))
const Title = dynamic(() => import('../components/title'))

const Playlists = (props) => {
    const [playlists, setPlaylists] = useState(props.playlists)
    const [currentPlaylist, setCurrentPlaylist] = useState(props.playlists[0])

    return (<div className="h-screen bg-purple-100 flex justify-center items-center">
        <div className="bg-white w-5/6 h-5/6 rounded-2xl shadow-2xl flex gap-x-8 px-8 py-8">
            <Sidebar playlists={playlists} addplaylist={playlist => {
                setPlaylists([...playlists, {id: playlists.length, name: playlist}])
                console.log(playlists)
            }}/>
            <div className="border-2 border-gray-500 w-5/6 h-full rounded-lg">
              <Title/>
            </div>
        </div>
    </div>);
}

export default Playlists;

export async function getServerSideProps() {
    const options = {
        method: 'GET',
        url: 'http://localhost:3000/api/getplaylists',
      };
      
    const res = await axios.request(options);
    const playlists = await res.data;
    
    return { props: { playlists } }
}