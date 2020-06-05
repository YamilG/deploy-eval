var expres = require('express');
var app = express();
app.set('port', process.env.PORT || 5000);

app.get('/', function(req, res) {
  res.send('Hello Node + Github! automatic deployments are working!');
});

app.listen(app.get('port'), function() {
  console.log('App is listening on port ' + app.get('port'));
});
