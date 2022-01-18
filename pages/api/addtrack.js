import db from './db';

const addtrack = async (req, res) => {
    const results = await db.query('INSERT INTO tracks(name, artist, album, preview, img, playlist) VALUES (?, ?, ?, ?, ?, ?)', 
        [req.query.name, req.query.artist, req.query.album, req.query.preview, req.query.img, req.query.playlist]);
    await db.end();
    return res.json(results);
}

export default addtrack;