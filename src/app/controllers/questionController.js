const {multipleMongooseToObject} = require('../../util/mongoose') 
const express = require('express');
const User = require('../model/loginRegister')
const blogUser = require('../model/blogUser')
class questionController {
    question(req, res) {
        const { user: { fullname, image } = {} } = req;
        blogUser.find({})
        .then(blogUser => {
            res.render('user/question', {
                blogUser:multipleMongooseToObject(blogUser),
                fullname,
            })
        })
        .catch(error => next(error))
    }
    newsBlog(req, res) {
        const { user: { fullname, image } = {} } = req;
        res.render('user/newsBlog', {
            fullname,
            image
        })
    }
}

module.exports = new questionController;