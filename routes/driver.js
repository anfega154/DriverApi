// here put routes
const express = require('express')
const router = express.Router()
const driverController = require('../Controllers/controller')

router.get('/', driverController.findDriver);
router.post('/create', driverController.create);
router.get('/search/:id', driverController.search);
router.put('/update/:id', driverController.updateSingle);
router.delete('/delete/:id', driverController.deleteSingle);

module.exports = router