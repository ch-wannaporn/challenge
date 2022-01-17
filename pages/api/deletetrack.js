import db from './db';

const deletetrack = async (req, res) => {
    const results = await db.query('DELETE FROM tracks WHERE id = ?', [req.query.track]);
    return res.json(results);
}

export default deletetrack;