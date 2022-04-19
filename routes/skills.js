var express = require('express');
var router = express.Router();

 // Require the controller that exports To-Do CRUD functions
 var skillsCtrl = require('../controllers/skills');

// Actual paths will start with skills/

//Get route
router.get('/', skillsCtrl.index)
// GET /skills/:id
router.get('/:id', skillsCtrl.show);

module.exports = router;
