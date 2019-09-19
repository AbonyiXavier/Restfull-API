const express = require('express');
const router = express.Router();

// import Controller
const eventController = require ('../controller/event')

// router.get('/',  (req, res) => {
//     res.json({
//         status: 'API Its Working',
//         message: 'Welcome to RESTful Api crafted with love!'
//     });
// });

router.post('/events', eventController.addEvent);
router.get('/events', eventController.getAllEvent);
router.delete('/events/:eventId', eventController.deleteEvent);


// Export API routes
module.exports = router;