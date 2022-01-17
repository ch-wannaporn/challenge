const TrackList = (props) => {
    var audios = [];

    return (<div className="w-full h-48">
        <ul className="border-t">
            {props.tracks.map((item, index) => (<li className="border-b px-4 py-2 inline-flex items-center justify-between w-full" key={item.id}>
                <div className="inline-flex items-center">
                    <div>
                        <button className="flex items-center" onClick={e => audios[index].paused ? audios[index].play() : audios[index].pause()}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-4" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                            </svg>
                        </button>
                        <audio className="hidden" preload="auto" controls ref={a => audios[index] = a}>
                            <source src={item.preview} />
                        </audio>
                    </div>
                    <img src={item.img} width="40" height="40" />
                    <span className="ml-4 font-medium">{item.name}</span>
                    <span className="ml-4 font-light text-gray-500">from {item.album} album by {item.artist}</span>
                </div>
                <div className="flex items-center">
                    <button onClick={e => props.deletetrack(item)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 hover:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </button>
                </div>
            </li>))}
        </ul>
    </div>);
}

export default TrackList;