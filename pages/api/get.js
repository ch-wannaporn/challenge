import db from './db';

const get = async (req, res) => {
    const results = await db.query('SELECT * FROM contacts');
    return res.json(results);
}

export default get;