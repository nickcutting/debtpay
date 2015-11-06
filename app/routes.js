var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.render('index');
});

router.get('/examples/template-data', function (req, res) {
  res.render('examples/template-data', { 'name' : 'Foo' });
});

router.post('/page5', function(req, res) {
    firstname = req.body.firstname;
    lastname = req.body.lastname;
    buildname = req.body.buildname;
    streetname = req.body.streetname;
    townname = req.body.townname;
	nino = req.body.nino;
    res.render('page5', {'firstname' : firstname, 'lastname' : lastname, 'buildname' : buildname, 'streetname' : streetname, 'townname' : townname, 'nino' : nino});
});

// add your routes here

module.exports = router;
