import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.group(() => {
  Route.post('', 'UsersController.store')
  Route.get('', 'UsersController.index')
  Route.get(':/guid', 'UsersController.show')
  Route.put(':/guid', 'UsersController.update')
  Route.delete(':/guid', 'UsersController.destroy')
}).prefix('/users')

Route.group(() => {
  Route.post('', 'MoviesController.store')
  Route.get('', 'MoviesController.index')
  Route.get('/:guid', 'MoviesController.show')
  Route.put('/:guid', 'MoviesController.update')
  Route.delete('/:guid', 'MoviesController.destroy')
}).prefix('/movies')