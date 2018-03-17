const express = require('express');
const massive = require('massive');
const bodyParser = require('body-parser');
const cors = require('cors');
const expressSessions = require('express-sessions');

const auth = require('./controllers/Auth-Controller')
const prop = require('./controllers/Prop-Controller')

require('dotenv').config();

const port = 5050
const app = express();

app.use(bodyParser.json());
app.use( cors());

massive(process.env.CONNECTION_STRING).then(dbInstance=> {
    app.set('db', dbInstance)
}).catch(err => {
    console.error(err);
})

//AUTH ENDPOINTS
app.post('/api/auth/login', auth.login)
app.post('/api/auth/register', auth.register)
app.post('/api/auth/logout', auth.logout)

//PROPERTIES ENDPOINTS
app.post('/api/properties', prop.create)
app.get('/api/properties', prop.get)
app.delete('api/properties/:id', prop.delete)

app.listen( port, () => console.log('listening on port', port))
