'use strict'
module.exports = app => {
  //boot
  app.listen(app.get('port'), () => {
    console.log( 'Express server listening on port %d in %s mode', app.get('port'), app.settings.env);
  });
};
