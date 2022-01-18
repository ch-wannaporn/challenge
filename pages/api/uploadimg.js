import db from './db';
import multer from 'multer';
import nextConnect from 'next-connect'

let path = null

let uploader = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, './public/uploads')
        },
        filename: function (req, file, cb) {
            path = Date.now() + '_' + file.originalname
            cb(null, path)
        }
    })
})

const api = nextConnect({
    onError: function (err, req, res) {
        console.log(err)
    },
    onNoMatch: function (req, res) {
        console.log("not allowed")
    }
});

api.use(uploader.array('file'))
api.post(async (req, res) => {
    const results = await db.query('UPDATE playlists SET img = ? WHERE id = ?', [path, req.body.id])
    await db.end()
    res.status(200).json({filepath:path})
})

export const config = {
    api: {
        bodyParser: false
    }
}

export default api;