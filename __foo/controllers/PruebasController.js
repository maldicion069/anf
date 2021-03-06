"use strict";

module.exports = {
	/**
	 * @api {get} /user/:id Request User information
	 * @apiName GetUser
	 * @apiGroup User
	 *
	 * @apiParam {Number} id Users unique ID.
	 *
	 * @apiSuccess {String} firstname Firstname of the User.
	 * @apiSuccess {String} lastname  Lastname of the User.
	 */
	index: function(req, res) {
		res.htmlFile("index.html");
		/*_.times(5, function(){
			console.log("TIME");
		});*/
		/*__ioc.$inject("user", function(u) {
			//u.where("userid", "<", 109).fetchAll({debug: true}).then(function(users) {
			u.where("userid", "<", 109).fetchAll().then(function(users) {
				//console.log(JSON.stringify(users.toJSON()));
				res.render(
					"index",
					{
						title: "Hey listen!",
						message: "TLOZ Ocarine of Time",
						users: users.toJSON()
					}
				);
			}).catch(function(err) {
				res.json(err);
			});
		});*/
		//res.ok();
		/*console.log(req.params.foo);
		console.log(req.checkParams('foo', 'Invalid urlparam').isInt());
		var errors = req.validationErrors();
		console.log(errors);
		res.ok();*/
	},

	upload: function(req, res) {
		__ioc.$inject("UploadService", function(upload) {
			return upload.upload_images(req, res, "photo");
		});
	},

	hello: function(req, res) {
		res.send("hello");
	},

	todo: function(req, res) {
		/*res.render(
			"todo"
		);*/
		
		return res.ok("OK");
	}
};