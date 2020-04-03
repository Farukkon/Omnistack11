const express = require('express');

const OngValidator = require('./validators/OngValidator');
const ProfileValidator = require('./validators/ProfileValidator');
const SessionValidator = require('./validators/SessionValidator');
const IncidentValidator = require('./validators/IncidentValidator');

const OngController = require('./controllers/OngController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const IncidentController = require('./controllers/IncidentController');

const routes = express.Router();

// Rota / Recurso
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngValidator.create, OngController.create);

routes.get('/profile', ProfileValidator.index, ProfileController.index);

routes.post('/sessions', SessionValidator.login, SessionController.login);

routes.get('/incidents', IncidentValidator.index, IncidentController.index);
routes.post('/incidents', IncidentValidator.create, IncidentController.create);
routes.delete('/incidents/:id', IncidentValidator.destroy, IncidentController.destroy);

module.exports = routes;
