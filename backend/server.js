const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require("dotenv");
const connectDB = require('./Config/db');
const cors = require('cors');
const path = require('path');

const InfoRoute = require('./Router/route')


dotenv.config();

connectDB();

const corsOpts = {
    origin: '*'
}

const app = express();

app.use(cors(corsOpts));


app.use('/api',InfoRoute);

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());




const __dirname1 = path.resolve();
if(process.env.NODE_ENV === 'production'){

    app.use(express.static(path.join(__dirname1,"portfolio/dist")))
 
    app.get('*',(req,res)=>{
     res.sendFile(path.resolve(__dirname1,"portfolio/dist/portfolio/index.html"))
   })
  
}else{
    app.use(express.static('portfolio/src'));
    app.get('/', (req, res) =>
        res.sendFile('index.html', {root: 'portfolio/src/'}),
    );
}


const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});