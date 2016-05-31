var express = require('express'),
    delimiters = require('./routes/delimiters'),
    app = express();

app.use(express.static('www'));
app.get('/find', delimiters.findAll);
app.get('/delete', delimiters.deleteItem);
app.get('/add', delimiters.addItem);
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});