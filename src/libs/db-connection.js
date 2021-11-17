const mongoose = require('mongoose')
const uri = "mongodb+srv://saynatest:telma@cluster0.rpee7.mongodb.net/crud-telm?retryWrites=true&w=majority"
mongoose.connect(uri, 
    { useNewUrlParser: true, 
    useUnifiedTopology: true }
    )
    .then(res => console.log('Connected to mongoose db'));