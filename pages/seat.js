import axios from "axios";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { io } from 'socket.io-client';

const Seat = () => {
    const router = useRouter()
    const rownames = ['A', 'B', 'C', 'D']
    const [seatMap, setSeatMap] = useState(new Array(40).fill(true))
    const [isUpdated, setIsUpdated] = useState(false)

    useEffect(async () => {
        setIsUpdated(false)

        fetch('/api/setseat').finally(() => {
            const socket = io()

            socket.on('connect', () => {
                socket.emit('takenseats')
            })

            socket.on('takenseats', getSeats)
        })

        return () => {
            socket.off('takenseats', getSeats)
            setIsUpdated(false)
        }
    }, [isUpdated])

    const getSeats = async (msg) => {
        console.log(msg)

        const options = {
            method: 'GET',
            url: 'http://localhost:3000/api/getseats',
            params: { movie: localStorage.getItem('movie'), showtime: localStorage.getItem('showtime') }
        };

        const res = await axios.request(options);
        const seats = await res.data;
        
        console.log(seats)

        setSeatMap(seatMap.map((item, index) => {
            return seats.findIndex(i => i.row === rownames[index % 4] && i.seat_no === (Math.floor(index / 4) + 1)) > -1
        }))
    }

    const chooseSeat = (seat) => {
        if (seat === 'X') {
            alert('This seat is taken!')
        } else {
            if (confirm('Do you want to choose ' + seat + '?'))
                book(seat.substring(0, 1), seat.substring(1, 2))
        }
    }

    const book = async (row, seat_no) => {
        var options = {
            method: 'POST',
            url: 'http://localhost:3000/api/setseat',
            params: {
                movie: localStorage.getItem('movie'),
                showtime: localStorage.getItem('showtime'),
                name: localStorage.getItem('name'),
                phone: localStorage.getItem('phone'),
                row: row,
                seat_no: seat_no
            }
        };

        const res = await axios.request(options);
        const log = await res.data;
        alert(log.msg)
        setIsUpdated(true)
        router.push('/theatre')
    }

    return (<div className="bg-seat-theatre relative">
        <div className="absolute bg-white left-24 right-24 top-12 bottom-12 rounded-2xl shadow-2xl p-12">
            <h1 className="text-6xl font-serif mb-8">Seat Map</h1>
            <div className="bg-gray-600 rounded-lg grid grid-flow-col grid-rows-4 gap-4 px-24 py-12 justify-between">
                {
                    seatMap.map((item, index) => (
                        <div key={index} className="cursor-pointer h-12 w-12 bg-yellow-400 rounded-t-2xl rounded-b-md flex items-center justify-center" onClick={e => chooseSeat(e.target.innerHTML)}>
                            {item ? 'X' : rownames[index % 4] + ((Math.floor(index / 4)) + 1)}
                        </div>
                    ))
                }
            </div>
        </div>
    </div>);
}

export default Seat;