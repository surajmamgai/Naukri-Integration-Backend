const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config();
const app = require('./app');

mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true
    })
    .then(con => {
        console.log('DB connection successful');
    });

const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
    console.log(`App running ${process.env.NODE_ENV} on port ${port}...`);
});

process.on('unhandledRejection', err => {
    console.error(err.name, err.message);
    console.log('UNHANDLED REJECTION! 💥 Shutting down...');
    server.close(() => {
        process.exit(1);
    });
});