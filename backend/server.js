const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require("dotenv");
const connectDB = require('./Config/db');
const cors = require('cors');

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





if(process.env.NODE_ENV === 'production'){

    app.use(express.static('portfolio/dist/portfolio'));

    app.get('*', (req, res) =>
        res.sendFile('index.html', {root: 'portfolio/dist/portfolio/'}),
    );
  
}else{
    app.use(express.static('portfolio/src'));

    app.get('*', (req, res) =>
        res.sendFile('index.html', {root: 'portfolio/src/'}),
    );
}


const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});