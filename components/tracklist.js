const TrackList = (props) => {
    var audios = [];

    return (<div className="w-full h-48">
        <ul className="border-t">
            {props.tracks.map((item, index) => (<li className="border-b px-4 py-2 inline-flex items-center justify-between w-full" key={item.id}>
                <div className="inline-flex items-center">
                    <img src={item.img} width="40" height="40" />
                    <span className="ml-4 font-medium">{item.name}</span>
                    <span className="ml-4 font-light text-gray-500">from {item.album} album by {item.artist}</span>
                </div>
                <div>
                    <button className="flex items-center" onClick={e => {
                        if (audios[index].paused) {
                            audios[index].play()
                        } else {
                            audios[index].pause()
                        }
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                    </button>
                    <audio className="hidden" preload="auto" controls ref={a => audios[index] = a}>
                        <source src={item.preview} />
                    </audio>
                </div>
            </li>))}
        </ul>
    </div>);
}

export default TrackList;