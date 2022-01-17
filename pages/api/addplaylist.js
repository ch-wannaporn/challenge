import db from './db';

const addplaylist = async (req, res) => {
    const results = await db.query('INSERT INTO playlists(id, name) VALUES (?, ?)', [req.query.id, req.query.name]);
    console.log(results);
    return res.json(results);
}

export default addplaylist;