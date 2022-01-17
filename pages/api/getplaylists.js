import db from './db';

const getplaylists = async (req, res) => {
    const results = await db.query('SELECT * FROM playlists');
    return res.json(results);
}

export default getplaylists;