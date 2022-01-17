const TrackList = (props) => {
    return (<div className="w-full">
        <ul>
            {props.tracks.map(item => <li key={item.id}>{item.name}</li>)}
        </ul>
    </div>);
}

export default TrackList;