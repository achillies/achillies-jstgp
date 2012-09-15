
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });

};

/*
 * GET newGame page.
 */

exports.newGame = function(req, res){
    res.render('newGame', { title: 'NewGame' });

};