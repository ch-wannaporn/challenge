import db from './db'

const getMovies = async (req, res) => {
    const results = await db.query('SELECT * FROM movies')
    await db.end()
    return res.json(results)
}

export default getMovies;