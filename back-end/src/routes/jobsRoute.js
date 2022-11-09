const { Router } = require('express');
const jobsController = require('../controllers/jobsController');

const routes = Router();

routes.post('/register', jobsController.create);
routes.post('/login', jobsController.login);

routes.get('/resumes', jobsController.read);
routes.put('/register/:id', jobsController.update);
routes.get('/resumes/:id', jobsController.readOne);

module.exports = routes;