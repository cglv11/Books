const mongoose = require('mongoose');

// MONGODB_URI call to environment variable
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true, useUnifiedTopology: true
}).then(db => console.log('Database is connected')).catch(err => console.error(err));
