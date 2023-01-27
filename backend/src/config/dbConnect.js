const mongoose = require("mongoose");

const connection = () => {
  return mongoose.connect(
    "mongodb+srv://govind1:123@cluster0.3cdklpi.mongodb.net/fundu?retryWrites=true&w=majority"
  );
};

module.exports = connection;
