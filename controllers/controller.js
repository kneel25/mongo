// Import dependencies.
var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var mongoose = require('mongoose');

// Initialize express router.
var router = express.Router();

// Import models.
var Article = require('../models/article');
var Comment = require('../models/comment');


