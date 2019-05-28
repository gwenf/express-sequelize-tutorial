const path = require('path')
const express = require('express')
const router = express.Router()

const sequelize = require('../db-config')
const User = sequelize.import(path.resolve(process.cwd(), 'db/models/user'))

router.route('/')
  .get(async function(req, res) {
    // pagination example
    const page = parseInt(req.query.page)
    const size = parseInt(req.query.size)
    const offset = (page + 1) * size

    const options = page && size ? { offset, limit: size } : {}

    User.findAll(options)
      .then(function (users) {
        res.json(users)
      })
  })
  .post(async function(req, res) {
    const {
      username,
      first_name,
      email,
      is_admin
    } = req.body

    User.create({ 
      username,
      first_name,
      email,
      is_admin
    })
      .then((user) => {
        res.json(user)
      })
      .catch((e) => {
        res.status(400).send(e)
      })
  })

router.route('/:userId')
  .get(async function(req, res) {
    User.findByPk(req.params.userId)
      .then((user) => {
        if (!user) {
          throw new Error('User does not exist')
        }
        return res.json(user)
      })
      .catch((e) => {
        res.status(400).send(e)
      })
  })
  .patch(async function(req, res) {
    User.findByPk(req.params.userId)
      .then((user) => {
        if (!user) {
          throw new Error('User does not exist')
        }
        return user.update(req.body)
      })
      .then((user) => {
        res.status(200).send(user)
      })
      .catch((e) => {
        res.status(400).send(e)
      })
  })
  .delete(async function(req, res) {
    User.findByPk(req.params.userId)
      .then((user) => {
        if (!user) {
          throw new Error('User does not exist')
        }
        return user.destroy()
      })
      .then((user) => {
        res.status(200).send('Success')
      })
      .catch((e) => {
        res.status(400).send(e)
      })
  })

module.exports = router
