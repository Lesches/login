var express = require('express');
var router = express.Router();
let rando = require('random-words');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/word', (req, res) =>{
  let word = rando(1);
  res.send({word: word});
    }
)

router.get('/words/:count', (req, res) =>{
  let count = Number(req.params.count);

      let word = rando({exactly: count, join: ' '});
      res.send({words: word});
    }
)

router.post('/word', (req, res) =>{
  let word = rando(1);
      res.send({word: 'Trump'});
    }
)

module.exports = router;
