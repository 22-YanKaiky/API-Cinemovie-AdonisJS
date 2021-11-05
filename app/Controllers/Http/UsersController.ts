import User from "App/Models/User";

export default class UsersController {
    async store({ request, response }) {
        const user = new User()

        user.name = request.body().name
        user.email = request.body().email
        user.image = request.body().image
        user.age = request.body().age

        await user.save();

        return response.status(201).send(user)
    }

    async index() {
        const user = User.all();

        return user;
    }
}
