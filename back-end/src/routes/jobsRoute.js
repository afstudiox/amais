const { Router } = require('express');
const jobsController = require('../controllers/jobsController');

const routes = Router();

routes.post('/register', jobsController.create);
routes.post('/login', jobsController.login);

routes.get('/resumes', jobsController.getAll);
routes.put('/:id', jobsController.change);
routes.get('/:id', jobsController.getOne);

module.exports = routes;