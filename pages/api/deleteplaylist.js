import db from './db';

const deleteplaylist = async (req, res) => {
    const results = await db.query('DELETE FROM playlists WHERE id = ?', [req.query.playlist]);
    await db.end();
    return res.json(results);
}

export default deleteplaylist;