const express = require('express');

const userActions = require('../controllers/user-actions');

const router = express.Router();


router.get("/", (req, res) => { res.json({ "success": true }) })

router.post('/signup', userActions.createUser);

router.post('/login', userActions.verifyUser);

module.exports = router;