'use strict';
var express = require('express');
var router = express.Router();

/* GET main page. */
router.get('/isitweekendyet', function(req, res, next) {
  var today = new Date().getDay();
  var isWeekend = (today === 0 || today === 6);

  var weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  res.render('index', {
    title: 'Is It Weekend Yet?',
    isWeekend: isWeekend,
    weekdays: weekdays
  });
});

module.exports = router;
