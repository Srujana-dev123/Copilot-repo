//create web server
var express = require('express');
var app = express();
//create server
var http = require('http').Server(app);
//create socket
var io = require('socket.io')(http);
//create fs
var fs = require('fs');
//create path
var path = require('path');
//create body-parser
var bodyParser = require('body-parser');
//create cookie-parser
var cookieParser = require('cookie-parser');
//create session
var session = require('express-session');
//create morgan
var morgan = require('morgan');
//create method-override
var methodOverride = require('method-override');
//create errorhandler
var errorHandler = require('errorhandler');
//create multer
var multer = require('multer');
//create mongoose
var mongoose = require('mongoose');
//create Schema
var Schema = mongoose.Schema;
//create assert
var assert = require('assert');
//create passport
var passport = require('passport');
//create LocalStrategy
var LocalStrategy = require('passport-local').Strategy;
//create flash
var flash = require('connect-flash');
//create crypto
var crypto = require('crypto');
//create nodemailer
var nodemailer = require('nodemailer');
//create smtpTransport
var smtpTransport = require('nodemailer-smtp-transport');
//create moment
var moment = require('moment');
//create async
var async = require('async