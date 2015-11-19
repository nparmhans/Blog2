// requiring the controller
var me = require('../controllers/me.js')

module.exports = function(app){
	app.get('/',function(request,response){
		me.show(request.response)
	})
	// app.get('/about',function(request,response){
	// 	me.display(request,response);

	// })
}