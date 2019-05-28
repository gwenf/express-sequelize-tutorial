require('@babel/polyfill')

const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const request = require('supertest')
const axios = require('axios')
const moxios = require('moxios')
const routes = require('../../server/api')

// testing server setup
const initExpress = () => {
  const app = express()
  app.use('/api/v1', routes)
  return app
}

describe('test users api', function(){
  beforeEach(() => {
    moxios.install()
  })
  afterEach(() => {
    moxios.uninstall()
  })

  const app = initExpress()
  test('responds with json of all users', async function(done) {
    // await request(app).get('/api/v1/users')

    await request(app)
      .get('/api/v1/users')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res){
        if (err) return done(err)
        done()
      })
  })
})

describe('CRUD Operations /users/{userId}', function(){
  it('creates a user', function(done){
    request(app)
      .post('/user/1')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res){
        if (err) return done(err);
        done()
      })
  })
  it('responds with json of one user', function(done){
    request(app)
      .get('/user/1')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res){
        if (err) return done(err);
        done()
      })
  })
})
