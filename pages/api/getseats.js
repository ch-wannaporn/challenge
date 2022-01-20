import db from './db';

const getSeats = async (req, res) => {
    const results = await db.query('SELECT row, seat_no FROM seats INNER JOIN movies ON seats.movie = movies.id WHERE movies.name = ? AND movies.showtime = ?', [req.query.movie, req.query.showtime])
    await db.end()
    return res.json(results)
}

export default getSeats;