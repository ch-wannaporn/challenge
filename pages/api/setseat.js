import db from './db'
import { Server } from 'socket.io'

const ioHandler = (res) => {
    if (!res.socket.server.io) {
        console.log('init socket.io')

        const io = new Server(res.socket.server)

        io.on('connection', socket => {
            
            socket.on('takenseats', () => {
                io.emit('takenseats', 'success')
            })

            socket.on('disconnect', () => {
                console.log('disconnect', socket.id)
            })
        })

        res.socket.server.io = io
    } else {
        console.log('socket.io running')
    }
    res.end()
}

const setSeat = async (req, res) => {
    if(req.method === 'POST') {
        const movie = await db.query('SELECT id FROM movies WHERE name = ? AND showtime = ?', [req.query.movie, req.query.showtime])
        await db.end()
        const results = await db.query('INSERT INTO seats (row, seat_no, movie, name, tel) VALUES (?, ?, ?, ?, ?)', [req.query.row, req.query.seat_no, movie[0].id, req.query.name, req.query.phone])
        await db.end()
        return res.json({msg: 'Successfully booked!'})
    } else {
        ioHandler(res)
    }
}

export default setSeat;

export const config = {
    api: {
        bodyParser: false
    }
}
