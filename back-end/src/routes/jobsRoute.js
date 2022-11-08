const { Router } = require('express');
const jobsController = require('../controllers/jobsController');

const routes = Router();

routes.post('/register', jobsController.create);
routes.post('/login', jobsController.login);

routes.get('/resumes', jobsController.read);
routes.put('/:id', jobsController.update);
routes.get('/:id', jobsController.readOne);

module.exports = routes;