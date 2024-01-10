require('dotenv').config()
const express = require('express')
const hbs = require('hbs')

const app = express()
const port = process.env.PORT

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

//Serve static content
app.use( express.static('public') )

app.get('/', function (req, res) {
    res.render('home', {
        name: 'Home.',
        title: 'Node'
    })
})

app.get('/generic', function (req, res) {
    res.render('generic', {
        name: 'Generic.',
        title: 'Node'
    })
})

app.get('/elements', function (req, res) {
    res.render('elements', {
        name: 'Elements..',
        title: 'Node'
    })
})

app.get('/*', function (req, res) {
    res.send('404 - Page not found.')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})