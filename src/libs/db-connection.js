const mongoose = require('mongoose')
const uri = "mongodb+srv://saynatest:@cluster0.rpee7.mongodb.net/crud-telm?retryWrites=true&w=majority"
mongoose.connect("mongodb://localhost:27017/crud_db", 
    { useNewUrlParser: true, 
    useUnifiedTopology: true }
    )
    .then(res => console.log('Connected to mongoose db'));