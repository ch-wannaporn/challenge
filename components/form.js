import { useState } from "react";

const Form = () => {
    const [movie, setMovie] = useState('');
    const [showtime, setShowtime] = useState('')
    const [name, setName] = useState('') 
    const [phone, setPhone] = useState('')

    const onSubmitHandler = (e) => {
        if(!validation()) 
            e.preventDefault();
        
        localStorage.setItem('movie', movie)
        localStorage.setItem('showtime', showtime)
        localStorage.setItem('name', name)
        localStorage.setItem('phone', phone)
    }

    const validation = () => {
        if(!(movie && showtime && name && phone)) {
            alert('Please fill all data in the form.')
            return false
        } else {
            return true
        }
    }

    return (
        <div className="absolute z-10 top-12 bottom-12 right-24 bg-white h-100 w-96 rounded-2xl shadow-2xl py-8 px-8">
            <h1 className="text-4xl font-serif">Book now!</h1>
            <form className="mt-4 flex flex-row flex-wrap gap-4 font-serif text-gray-800">
                <label className="text-xl">Movie</label>
                <select className="w-full focus:outline-none border py-2 rounded-lg" value={movie} onChange={e => setMovie(e.target.value)}>
                    <option disabled hidden selected value=''>Choose...</option>
                    <option value="spiderman">Spiderman</option>
                </select>
                <label className="text-xl">Showtime</label>
                <select className="w-full focus:outline-none border py-2 rounded-lg" value={showtime} onChange={e => setShowtime(e.target.value)}>
                    <option disabled hidden selected value=''>Choose...</option>
                    <option value="2pm">2PM</option>
                </select>
                <label className="text-xl">Name</label>
                <input className="w-full focus:outline-none border px-1 py-1 rounded-lg" placeholder="Name" value={name} onChange={e => setName(e.target.value)}/>
                <label className="text-xl">Phone Number</label>
                <input className="w-full focus:outline-none border px-1 py-1 rounded-lg" placeholder="Phone Number" value={phone} onChange={e => setPhone(e.target.value)}/>
                <div className="mt-2 w-full">
                    <a href="/seat" type="button" className="float-right bg-yellow-400 px-4 py-2 rounded-lg font-semibold" onClick={e => onSubmitHandler(e)}>Choose a seat</a>
                </div>
            </form>
        </div>
    )
}

export default Form;