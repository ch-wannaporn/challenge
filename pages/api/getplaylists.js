import db from './db';

const getplaylists = async (req, res) => {
    const results = await db.query('SELECT * FROM playlists');
    await db.end();
    return res.json(results);
}

export default getplaylists;