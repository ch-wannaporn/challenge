import db from './db';

const editplaylistname = async (req, res) => {
    const results = await db.query('UPDATE playlists SET name = ? WHERE id = ?', [req.query.name, req.query.id]);
    await db.end();
    return res.json(results);
}

export default editplaylistname;