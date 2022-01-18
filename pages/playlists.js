import { useState, useForceUpdate } from "react";
import dynamic from "next/dynamic";
import axios from "axios";

const Sidebar = dynamic(() => import('../components/sidebar'))
const Title = dynamic(() => import('../components/title'))
const TrackList = dynamic(() => import('../components/tracklist'))

const Playlists = (props) => {
    const [playlists, setPlaylists] = useState(props.playlists)
    const [currentPlaylist, setCurrentPlaylist] = useState(props.playlists[0])
    const [currentTracks, setCurrentTracks] = useState(props.tracks)
    const [searchOptions, setSearchOptions] = useState([])

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

    const deleteTrack = async (item) => {
        if(confirm('Do you want to remove this song from playlist?')) {
            setCurrentTracks(currentTracks.filter(i => i.id !== item.id))
            const options = {
                method: 'GET',
                url: 'http://localhost:3000/api/deletetrack',
                params: { track: item.id }
            };
    
            const res = await axios.request(options);
            const log = await res.data;
            console.log(log)
        }
    }

    const updateCurrentPlaylistName = async (name) => {
        const index = playlists.findIndex(item => item.id === currentPlaylist.id)
        var p = [...playlists]
        p[index].name = name
        setPlaylists(p)

        const options = {
            method: 'POST',
            url: 'http://localhost:3000/api/editplaylistname',
            params: { id: currentPlaylist.id, name: name}
        };

        const res = await axios.request(options);
        const log = await res.data;
        console.log(log)
    }

    const updateCurrentPlaylistImg = async (file) => {
        var formData = new FormData()
        formData.append('file', file)
        formData.append('id', currentPlaylist.id)

        const options = {
            method: 'POST',
            url: 'http://localhost:3000/api/uploadimg',
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
        };

        const res = await axios.request(options);
        const filepath = await res.data.filepath;

        const index = playlists.findIndex(item => item.id === currentPlaylist.id)
        var p = [...playlists]
        p[index].img = filepath
        setPlaylists(p)
    }

    const searchTracks = async (val) => {
        var options = {
            method: 'GET',
            url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
            params: {q: val},
            headers: {
              'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
              'x-rapidapi-key': '023fdb6801msh416efa25372a335p1652c5jsnd2524ecd67e6'
            }
          };
          
          const res = await axios.request(options)
          const songs = await res.data.data
          const opt = songs? songs.map(item => {
              return { value: item.id, label: item.title + " - " + item.artist.name }
          }): []

          setSearchOptions(opt)
    }

    const addTrack = async (track) => {
        var options = {
            method: 'GET',
            url: 'https://deezerdevs-deezer.p.rapidapi.com/track/' + track.value,
            headers: {
              'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
              'x-rapidapi-key': '023fdb6801msh416efa25372a335p1652c5jsnd2524ecd67e6'
            }
          };
          
        const res = await axios.request(options)
        const song = await res.data

        const params = {
            id: null, 
            name: song.title, 
            album: song.album.title,
            artist: song.artist.name,
            preview: song.preview,
            img: song.album.cover,
            playlist: currentPlaylist.id }

        options = {
            method: 'POST',
            url: 'http://localhost:3000/api/addtrack',
            params: params
        };

        res = await axios(options);
        const log = await res.data;
        console.log(log)

        params.id = log.insertId
        setCurrentTracks([...currentTracks, params])
    }

    const deletePlaylist = async () => {
        if(confirm('Do you want to delete this playlist?')) {
            const options = {
                method: 'GET',
                url: 'http://localhost:3000/api/deleteplaylist',
                params: { playlist: currentPlaylist.id }
            };
    
            const res = await axios.request(options);
            const log = await res.data;
            console.log(log)

            setPlaylists(playlists.filter(i => i.id !== currentPlaylist.id))
            selectPlaylist(0)
        }
    }

    return (<div className="h-screen bg-purple-100 flex justify-center items-center">
        <div className="bg-white w-5/6 h-5/6 rounded-2xl shadow-2xl flex gap-x-8 px-8 py-8">
            <Sidebar playlists={playlists} addplaylist={addPlaylist} selectplaylist={selectPlaylist} />
            <div className="border-2 border-gray-500 w-5/6 h-full rounded-lg flex flex-row flex-wrap gap-y-8 px-8 py-8 overflow-y-auto">
                <Title 
                    current={currentPlaylist} 
                    total={currentTracks.length} 
                    setcurrentname={updateCurrentPlaylistName} 
                    setcurrentimg={updateCurrentPlaylistImg} 
                    options={searchOptions}
                    searchtracks={searchTracks}
                    addtrack={addTrack}
                    deleteplaylist={deletePlaylist}/>
                <TrackList tracks={currentTracks} deletetrack={deleteTrack}/>
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

    return { props: { playlists: playlists, tracks: tracks} }
}