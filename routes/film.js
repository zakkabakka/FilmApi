var express = require('express');
var router = express.Router();
var model = require('../models/index');

console.log("********************************************************************************************",model.Film);

/* GET films listing. */
router.get('/films', function(req, res, next) {

	//console.log("££££££££££££££",req);
	model.Film.findAll({})
        .then(films => res.json({
            error: false,
            data: films
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
});
 
 
/* POST film. */
router.post('/film', function(req, res, next) {
	console.log("****************BODY*******************", req.body);
	
	if(req.body){
		model.Film.create({
            title: req.body.title,
	        description: req.body.description,
	        image: req.body.image,
	        url: req.body.url
        })
        .then(film => res.status(201).json({
            error: false,
            data: film,
            message: 'New film has been created.'
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
	}else {
		console.log("**************** ELSEEEEEE *******************");
	}
    
});
 
 
/* update film. */
router.put('/film/:id', function(req, res, next) {
	const film_id = req.params.id;
 
    model.Film.update({
            title: req.body.title,
	        description: req.body.description,
	        image: req.body.image,
	        url: req.body.url
        }, {
            where: {
                id: film_id
            }
        })
        .then(film => res.json({
            error: false,
            message: 'film has been updated.'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
});
 
 
/* GET film listing. */
router.delete('/film/:id', function(req, res, next) {
	const film_id = req.params.id;
 
    model.Film.destroy({ where: {
        id: film_id
    }})
        .then(status => res.json({
            error: false,
            message: 'film has been delete.'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
});
 
module.exports = router;