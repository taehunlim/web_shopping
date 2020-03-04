const mongoose = require('mongoose');

mongoose
    .connect(process.env.MONGO_URL,{
        useUnifiedTopology : true,
        useCreateIndex : true,
        useNewUrlParser : true,
        useFindAndModify : true
    })
    .then(() => console.log("mongoDB connected"))
    .catch(err => console.log(err));