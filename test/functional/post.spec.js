'use strict'

const { test, trait } = use('Test/Suite')('Posts')

const User = use('App/Models/User')

trait('Auth/Client')
trait('Session/Client')
trait('Test/ApiClient')

test('get list of posts', async ({ client }) => {

  const user = await User.find(1)

  const response = await client
  .get('posts')
  .loginVia(user)
  .end()



  response.assertStatus(200)

})
