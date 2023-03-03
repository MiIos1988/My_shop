const express = require('express');
const app = express();
const cors = require('cors');
const authRoute = require('./routes/authRoute');
const portNumber = 5050;

app.use(express.json());
app.use(cors());

app.use('/api/auth', authRoute)



app.listen(portNumber, (error) => {
    error ? console.log('Error on server start.') : console.log(`Server is running on port ${portNumber}... `);
}
);