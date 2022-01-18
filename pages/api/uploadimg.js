import db from './db';
import multer from 'multer';
import nextConnect from 'next-connect'
  
let uploader = multer({ storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '_' + file.originalname)
    }
  }) })  

const api = nextConnect({
    onError: function(err, req, res) {
        console.log(err)
    },
    onNoMatch: function(req, res) {
        console.log("not allowed")
    }
});

api.use(uploader.array('file'))
api.post((req,res) => {
    res.status(200).json({
        msg: "hi"
    })
})

export const config = {
    api: {
        bodyParser: false
    }
}

export default api;