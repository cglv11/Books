if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config(); //load environment variables to be reading it
}

const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

//initializations
const app = express();
require('./database');

//settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
const storage = multer.diskStorage({
  destination: path.join(__dirname, 'public/uploads'),
  filename(req, file, cb) {
    cb(null, new Date().getTime() + path.extname(file.originalname));
  }
});
app.use(multer({storage}).single('image'));
app.use(express.urlencoded({extended: false})); // interpret form data (frontend) as JSON file
app.use(express.json()); // soport data type json on server
app.use(cors());

// Routes
app.use('/api/books', require('./routes/books')); // All books routes come from routes/books

// Static files (html, css, js) use for files that we going to use of static way
app.use(express.static(path.join(__dirname, 'public')));

// Start server
app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
});
