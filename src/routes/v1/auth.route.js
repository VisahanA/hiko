const { Router } = require('express');
const authController = require('./../../controller/auth.controller');

const router = Router();

router.post('/sign_up', (req, res, next) => {
  authController.signUp(req, res).catch((err) => { next(err) });
});

router.post('/login', (req, res, next) => {
  authController.login(req, res).catch((err) => { next(err) });
});

module.exports = router;
