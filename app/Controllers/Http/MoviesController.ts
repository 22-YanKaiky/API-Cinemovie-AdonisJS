import Movie from "App/Models/Movie";

export default class MoviesController {
    async store({ request, response }) {
        let movie = new Movie()

        movie.name = request.body().name
        movie.link = request.body().link
        movie.genre = request.body().genre
        movie.time = request.body().time
        movie.year = request.body().year
        movie.direction = request.body().direction
        movie.synopsis = request.body().synopsis
        movie.folder = request.body().folder
        movie.trailer = request.body().trailer

        movie = await movie.save();

        return response.status(201).send(movie)
    }

    async index() {
        const movie = Movie.all()
        return movie;
    }

    async show({ request, response }) {
        const movie = await Movie.findBy('guid', request.param('guid'))

        if (!movie) return response.status(404).send({ message: "Filme não encontrado" })

        return response.status(200).send(movie)
    }

    async update({ request, response }) {
        const movie = await Movie.findByOrFail('guid', request.param('guid'))

        movie.name = request.body().name
        movie.link = request.body().link
        movie.genre = request.body().genre
        movie.time = request.body().time
        movie.year = request.body().year
        movie.direction = request.body().direction
        movie.synopsis = request.body().synopsis
        movie.folder = request.body().folder
        movie.trailer = request.body().trailer
        
        await movie.save()

        return response.status(201).send(movie);
    }

    async destroy({ request, response }) {
        const movie = await Movie.findByOrFail('guid', request.param('guid'));
        await movie?.delete()
        return response.status(200).send({ message: "Filme deletado com sucesso" })
    }
}
