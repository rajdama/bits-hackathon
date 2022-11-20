const express = require('express')
const mongoose = require('mongoose');
const env = require('dotenv')
const app = express()
const cors = require('cors')

env.config()
app.use(cors())
app.use(express.json())

mongoose.connect(`mongodb+srv://root:${process.env.MONGO_DB_PASSWORD}@cluster0.uf9usou.mongodb.net/?retryWrites=true&w=majority`,
{
    useNewUrlParser : true,
    useUnifiedTopology : true,
}
    ).then(()=>{
        console.log('database connected')
            });

const userRoutes = require('./routes/user')
app.use('/api',userRoutes)

app.listen(process.env.PORT, () => {
    console.log('Server is running on port 1000')
})
