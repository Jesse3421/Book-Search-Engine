const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://jesse3421:password1234@cluster0.dtpei.mongodb.net/BookSearchEngineDB?retryWrites=true&w=majority',
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;

//'mongodb://localhost:27017/book-search-engine'