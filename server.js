const cool = require('cool-ascii-faces')
const bodyParser = require('body-parser')
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const postOffice = require('../CS313-Node/public/scripts/postal')

let urlencodedParser = bodyParser.urlencoded({extended:false});

express()
  .use(express.static(__dirname + '/public'))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/home', (req, res) => res.render('pages/index'))
  .post('/getRate', urlencodedParser,
        //  (req, res) =>console.log(req.body),
        //(req, res) => res.render('pages/postal.ejs', {data:req.body})
        (req, res) => postOffice.postalServices(res,req))
  .get('/cool', (req, res) => res.send(cool()))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
