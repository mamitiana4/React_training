const express = require('express');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');
const jwt = require('jsonwebtoken');
var crypto = require('crypto');
var multer = require('multer');
var GridFsStorage = require('multer-gridfs-storage');
var Grid = require('gridfs-stream');
var methodOverride = require('method-override')
//const fileUpload = require('express-fileupload');

//var urlencodedParser = bodyParser.urlencoded({ extended: false }) ;

const app = express();

const port = 5000;

app.use(bodyParser.json());
app.use(methodOverride('_method'));

const mongoURI = 'mongodb://localhost/uploads';

const conn = mongoose.createConnection(mongoURI);
const conn1 = mongoose.connect(mongoURI);
var db = mongoose.connection;

var gfs;
conn.once('open', () => {
    //intialise stream
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection('uploads');
});
//zaozazoaozaozoaozaozoaozaozoaozoazoaoz
//const fs = require('fs');


//create storage engine
var storage = new GridFsStorage({
    url: mongoURI,
    file: (req, file) => {
        console.log(file);
        return new Promise((resolve, reject) => {
            /* crypto.randomBytes(16, (err, buf) => {
                if (err) {
                    return reject(err);
                } */
            const filename = file.originalname;

            const fileInfo = {
                filename: filename,
                bucketName: 'uploads'
            };
            resolve(fileInfo);
            //});
        });
    }
});

const upload = multer({
    storage
});

app.get('/', (req, res) => {
    gfs.files.find().toArray((err, files) => {
        //check if there's a file
        if (!files || files.length === 0) {
            res.json({
                err: err
            });
        } else {
            res.json({
                files: files
            });
        }

        // file exist
        //return res.json(files);
    })
});

// get /files
// display all files in json
app.get('/files', (req, res) => {
    //with grid-fs-steam
    gfs.files.find().toArray((err, files) => {
        //check if there's a file
        if (!files || files.length === 0) {
            return res.status(404).json({
                err: 'No files exist'
            });
        }

        // file exist
        return res.json(files);
    })
});

// get /file/fileName
// display file object
app.get('/files/:filename', (req, res) => {
    //with grid-fs-steam
    gfs.files.findOne({
        filename: req.params.filename
    }, (err, file) => {
        if (!file || file.length === 0) {
            return res.status(404).json({
                err: 'No file exist'
            });
        }

        // file exist
        return res.json(file);
    })
});

//get /image/imagename
//display image
app.get('/image/:filename', (req, res) => {
    gfs.files.findOne({
        filename: req.params.filename
    }, (err, file) => {
        if (!file || file.length === 0) {
            return res.status(404).json({
                err: 'No file exist'
            });
        }

        // file exist
        if (file.contentType === 'image/png' || file.contentType === 'image/jpeg') {
            //read output to browser
            var readstream = gfs.createReadStream(file.filename);
            readstream.pipe(res);
        } else {
            return res.status(404).json({
                err: 'Not an image'
            });
        }
    })
});

app.get('/video/:filename', (req, res) => {
    gfs.files.findOne({
        filename: req.params.filename
    }, (err, file) => {
        if (!file || file.length === 0) {
            return res.status(404).json({
                err: 'No file exist'
            });
        }

        // file exist
        if (file.contentType === 'video/x-matroska') {
            //read output to browser
            var readstream = gfs.createReadStream(file.filename);
            readstream.pipe(res);
        } else {
            return res.status(404).json({
                err: 'Not a video'
            });
        }
    })
});

//with express-fileupload
/* app.post("/upload", (req,res)=>{
    
}) ; */

app.post('/upload', upload.single('file'), (req, res) => {
    //res.json({file: req.file});
    console.log('id -------> ', req.file.id);
    res.redirect('/userPage');
});


var User = require('./client/src/models/user');

app.get('/users', (req, res) => {
    User.getUsers((err, users) => {
        if (err) throw err;
        res.json(users);
    })
})

app.post('/createUser', (req, res) => {
    User.findOne({
        username: req.body.username
    }, (err, user) => {
        if (err) throw err;
        if (!user) {
            console.log('username valide');
            User.findOne({
                email: req.body.email
            }, (err, user) => {
                if (err) throw err;
                if (!user) {
                    console.log('new email');
                    User.addUser(req.body, (err, user) => {
                        if (err) throw err;
                        res.json(user);
                        console.log('user created: ', user);
                    })
                } else {
                    console.log('email already exist')
                }
            });
        } else {
            console.log('username already taken');
        }
    });
    /* User.findOne({
        email: req.body.email
    }, (err, user) => {
        if (err) throw err;
        if(!user){
            console.log('new email') ;
            User.addUser(req.body , (err, user) => {
        if (err) throw err;
        res.json(user);
        console.log('user created: ',user) ;
    })
        }else{
            console.log('email already exist')
        }
    }); */
    /* User.addUser(req.body , (err, user) => {
        if (err) throw err;
        res.json(user);
        console.log('user created: ',user) ;
    }) */
});

app.post('/logIn', (req, res) => {
    //console.log(req.body) ;
    //idée : connct any am base->verifiena ra misy->de redirigena any amny userpage miaraka amny information anle olona

    User.findOne({
        email: req.body.email,
        password: req.body.password
    }, (err, user) => {
        if (err) throw err;
        if (!user) {
            console.log('tsy mety mintsy');
        } else {
            /* res.json({
                user
            }); */
            jwt.sign({
                user
            }, 'secretKey', (err, token) => {
                res.json({
                    token
                });
                console.log('token --> ', token);
                console.log('user:', token.split('.')[1]);
            });
            console.log('user connected: ', user);

        }
    });
})

app.delete('/files/:id', (req, res) => {
    gfs.remove({
        _id: req.params.id,
        root: 'uploads'
    }, (err, gridStore) => {
        if (err) {
            return res.status(404).json({
                err: err
            });
        }
        res.redirect('/userPage');
    });
})

app.listen(port, () => {
    console.log(`app listening at port ${port}`);
});