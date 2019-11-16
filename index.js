const cool = require('cool-ascii-faces')
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const postal = require('./postal.js');

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', function(req, res){
    res.sendFile('form.html', { root: __dirname + "/public"});
  })
  .get('/cool', (req, res) => res.send(cool()))
  .get('/postal', postal.computeRate)
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

  //.get('/', (req, res) => res.render('pages/index'))
