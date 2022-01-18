import db from './db';

const editplaylist = async (req, res) => {
    const results = await db.query('UPDATE playlists SET name = ?, img = ? WHERE id = ?', [req.query.name, req.query.img, req.query.id]);
    await db.end();
    return res.json(results);
}

export default editplaylist;