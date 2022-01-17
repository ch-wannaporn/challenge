import { useState } from "react";
import dynamic from "next/dynamic";
import axios from "axios";

const Sidebar = dynamic(() => import('../components/sidebar'))
const Title = dynamic(() => import('../components/title'))

const Playlists = (props) => {
    const [playlists, setPlaylists] = useState(props.playlists)
    const [currentPlaylist, setCurrentPlaylist] = useState(props.playlists[0])

    const addPlaylist = async (playlist) => {
        const id = playlists[playlists.length-1].id + 1
        setPlaylists([...playlists, {id: id, name: playlist}])
        const options = {
            method: 'POST',
            url: 'http://localhost:3000/api/addplaylist',
            params: {id: id, name: playlist}
        };

        const res = await axios(options)
    }

    const selectPlaylist = () => {
        
    }

    return (<div className="h-screen bg-purple-100 flex justify-center items-center">
        <div className="bg-white w-5/6 h-5/6 rounded-2xl shadow-2xl flex gap-x-8 px-8 py-8">
            <Sidebar playlists={playlists} addplaylist={addPlaylist} selectplaylist={selectPlaylist}/>
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