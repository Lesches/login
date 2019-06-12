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
);

router.get('/words/:count', (req, res) =>{
  let count = Number(req.params.count);

      let words = rando({exactly: count, join: ' '});
      res.send({words: words});
    }
);

router.get('/sentence', (req, res) => {
  min = (isNaN(Number(req.query.min)))? 1: Number(req.query.min);
  max = (isNaN(Number(req.query.max)))? min +1: Number(req.query.max);
  let sentence = rando({min:min, max:max, join: ' '});
  res.send({sentence:sentence});
});

router.post('/word', (req, res) =>{
  let word = rando(1);
      res.send({word: 'Trump'});
    }
)

module.exports = router;
