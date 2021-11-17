const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/crud_db", 
    { useNewUrlParser: true, 
    useUnifiedTopology: true }
    )
    .then(res => console.log('Connected to mongoose db'));