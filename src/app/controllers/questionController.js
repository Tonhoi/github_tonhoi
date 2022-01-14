const {multipleMongooseToObject} = require('../../util/mongoose') 
const express = require('express');
const User = require('../model/loginRegister')
const blogUser = require('../model/blogUser')
class questionController {
    question(req, res) {
        const { user: { fullname, image, role } = {} } = req;
        if (role === 'admin') {
            blogUser.find({})
            .then(blogUser => {
                res.render('user/question', {
                    blogUser:multipleMongooseToObject(blogUser),
                    fullname,
                    role
                })
            })
            .catch(error => next(error))
        }else {
            blogUser.find({})
            .then(blogUser => {
                res.render('user/question', {
                    blogUser:multipleMongooseToObject(blogUser),
                    fullname
                })
            })
            .catch(error => next(error))
        }
    }
    newsBlog(req, res) {
        const { user: { fullname, image, role } = {} } = req;
        if (role === 'admin') {
            res.render('user/newsBlog', {
                fullname,
                image,
                role
            })
        }else {
            res.render('user/newsBlog', {
                fullname,
                image
            })
        }
    }
}

module.exports = new questionController;