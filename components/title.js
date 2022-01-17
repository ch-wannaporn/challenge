const Title = (props) => {
    return (<div className="inline-flex justify-center gap-x-12 h-fit -mb-48">
        <div className="flex-none shadow-lg text-center rounded-lg overflow-hidden w-48 mx-auto">
            <img className="object-cover h-48 w-full"
                src={props.current.img ? props.current.img : "/playlist_profile.jpg"} />
        </div>
        <div className="flex flex-row flex-wrap items-end h-48">
            <h1 className="w-full text-6xl font-medium text-gray-600">{props.current.name}</h1>
            <h3 className="w-full text-xl text-gray-500">total tracks</h3>
            <div className="w-full inline-flex">
                <input className="w-full border border-gray-300 rounded-l-md py-2 px-4 focus:outline-none" placeholder="Search..."/>
                <button className="flex-none bg-green-500 hover:bg-green-600 border border-green-500 text-white rounded-md rounded-l-none py-2 px-4">Add Track</button>
            </div>
        </div>
    </div>)
}

export default Title;