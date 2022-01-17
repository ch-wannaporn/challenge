import axios from "axios";

const playlists = (props) => {
    return (<div className="h-screen bg-purple-100 flex justify-center items-center">
        <div className="bg-white w-5/6 h-5/6 rounded-2xl shadow-2xl flex gap-x-8 px-8 py-8">
            <div className="bg-purple-700 w-1/6 h-full rounded-lg"></div>
            <div className="border-2 border-gray-500 w-5/6 h-full rounded-lg"></div>
        </div>
    </div>);
}

export default playlists;

export async function getServerSideProps() {
    const options = {
        method: 'GET',
        url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
        params: {'q': 'hi'},
        headers: {
          'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
          'x-rapidapi-key': '023fdb6801msh416efa25372a335p1652c5jsnd2524ecd67e6'
        }
      };
      
    const res = await axios.request(options);
    const data = await res.data;
    console.log(data);
    return { props: { data } }
}