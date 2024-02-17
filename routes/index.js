var express = require('express');
var router = express.Router();
const multer = require('multer');


const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './public/images/uploads')
    },
    filename: function(req, file, cb) {
        var filename = Date.now() + Math.floor(Math.random() * 1000000) + file.originalname;

        cb(null, filename)
    }
})

const upload = multer({ storage: storage })

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});
router.post('/image', upload.single('image'), function(req, res, next) {
    res.redirect("/");
});

module.exports = router;