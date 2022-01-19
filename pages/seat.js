const Seat = () => {
    const rownames = ['A', 'B', 'C', 'D']

    return (<div className="bg-seat-theatre relative">
        <div className="absolute bg-white left-24 right-24 top-12 bottom-12 rounded-2xl shadow-2xl p-12">
            <h1 className="text-6xl font-serif mb-8">Seat Map</h1>
            <div className="bg-gray-600 rounded-lg grid grid-flow-col grid-rows-4 gap-4 px-24 py-12 justify-between">
                {
                    new Array(40).fill(0).map((_, index) => (
                        <div className="cursor-pointer h-12 w-12 bg-yellow-400 rounded-t-2xl rounded-b-md flex items-center justify-center">{rownames[index%4]}{(Math.floor(index/4))+1}</div>
                    ))
                }
            </div>
        </div>
    </div>);
}

export default Seat;