
const app = require('express')();
const httpProxy = require('express-http-proxy');

const port = process.env.PORT || 3000;

const {
    GCP_API_URL,
} = require('./urls');


// imports urls micro services
const gcpServiceProxy = httpProxy(GCP_API_URL);

// imports routes
app.get('/', (req, res) => res.send('Hello Gateway API'));
app.post('/upload', (req, res) => gcpServiceProxy(req, res));


app.listen(port, () => console.log(`api gateway listening on port ${port}!`));