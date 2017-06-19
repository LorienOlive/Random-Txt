var loremIpsum = require('lorem-ipsum')

var express = require('express');
var app = express();

app.get('/lorem/:numOfParagraphs', function (req, res) {
  res.send(loremIpsum({
      count: req.params.numOfParagraphs
    , units: 'paragraphs',
      format: 'html'
  }));
})

app.listen(3000, function(){
  console.log("Successfully started express application!")
});
