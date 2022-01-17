import db from './db';

const gettracks = async (req, res) => {
    const results = await db.query('SELECT * FROM tracks WHERE playlist = ?', [req.query.playlist]);
    return res.json(results);
}

export default gettracks;