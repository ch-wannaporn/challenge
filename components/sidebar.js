import { useState } from "react";

const Sidebar = (props) => {
    const [playlist, setPlaylist] = useState('');

    return (
        <div className="bg-purple-700 w-1/4 h-full rounded-lg">
            <nav className="px-4 py-8 text-center">
                <h1 className="text-white text-xl font-semibold inline-flex items-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                    </svg>
                    My Playlists
                </h1>
                <hr className="mb-8" />
                <ul>
                    {props.playlists.map((item, index) => <li className="text-purple-50 font-semibold text-md cursor-pointer my-4 hover:text-gray-300" key={item.id} index={index} onClick={e => props.selectplaylist(e.target.attributes.index.value)}>{item.name}</li>)}
                    <li key="add">
                        <div className="flex flex-row text-md mt-4">
                            <input className="flex-grow w-full rounded mr-0.5 bg-purple-50 focus:outline-none px-2 py-1" placeholder="New Playlist" value={playlist} onChange={e => setPlaylist(e.target.value)}/>
                            <button className="inline-flex justify-center text-white bg-purple-400 hover:bg-purple-300 px-2 py-1 rounded" onClick={e => {
                                playlist? props.addplaylist(playlist):null
                                setPlaylist('')
                            }}>
                                Add
                            </button>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;