import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.resource('users', 'UsersController').apiOnly();

Route.resource('animes', 'AnimesController').apiOnly();

Route.resource('movies', 'MoviesController').apiOnly();

Route.resource('series', 'SeriesController').apiOnly();
