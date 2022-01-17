const Sidebar = (props) => {
    return (
        <div className="bg-purple-700 w-1/6 h-full rounded-lg">
            <nav className="px-4 py-8 text-center">
                <h1 className="text-white text-2xl font-semibold inline-flex items-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                    </svg>
                    My Playlists
                </h1>
                <hr className="mb-8"/>
                <ul>
                    {props.playlists.map(item => <li className="text-purple-50 font-semibold text-lg cursor-pointer my-4 hover:text-gray-300" key={item.id}>{item.name}</li>)}
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;