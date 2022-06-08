const express = require('express');
const ReactDOMServer = require('react-dom/server');
const React = require('react');

const Home = require('../views/Home');

const router = express.Router();
const Die = require('../db/models/die');

/* GET home page. */
router.get('/', (req, res) => {
  const home = React.createElement(Home, req.app.locals);
  const html = ReactDOMServer.renderToStaticMarkup(home);
  res.write('<!DOCTYPE html>');
  res.end(html);
  // console.log(...req.app.locals);
});

// TODO: изменить данный маршрутизатор с использованием AJAX
router.post('/rolls', (req, res) => {
  const die = new Die(Number(req.body.sides));

  const home = React.createElement(Home, {
    ...req.app.locals,
    die,
    roll: die.roll(),
  });
  const html = ReactDOMServer.renderToStaticMarkup(home);
  res.write('<!DOCTYPE html>');
  res.end(html);
  // console.log(home);
});

module.exports = router;
