import Anime from "App/Models/Anime";

export default class AnimesController {
    async store({ request, response }) {
        let anime = new Anime()

        anime.name = request.body().name
        anime.link = request.body().link
        anime.genre = request.body().genre
        anime.seasons = request.body().seasons
        anime.episodes = request.body().episodes
        anime.year = request.body().year
        anime.direction = request.body().direction
        anime.synopsis = request.body().synopsis
        anime.folder = request.body().folder
        anime.trailer = request.body().trailer

        anime = await anime.save();

        return response.status(201).send(anime)
    }

    async index() {
        const anime = Anime.all()
        return anime;
    }

    async show({ request, response }) {
        const anime = await Anime.findBy('guid', request.param('id'))

        if (!anime) return response.status(404).send({ message: "Anime não encontrado" })

        return response.status(200).send(anime)
    }

    async update({ request, response }) {
        const anime = await Anime.findByOrFail('guid', request.param('id'))

        anime.name = request.body().name
        anime.link = request.body().link
        anime.genre = request.body().genre
        anime.seasons = request.body().seasons
        anime.episodes = request.body().episodes
        anime.year = request.body().year
        anime.direction = request.body().direction
        anime.synopsis = request.body().synopsis
        anime.folder = request.body().folder
        anime.trailer = request.body().trailer

        await anime.save()

        return response.status(201).send(anime);
    }

    async destroy({ request, response }) {
        const anime = await Anime.findByOrFail('guid', request.param('id'));
        await anime?.delete()
        return response.status(200).send({ message: "Anime deletado com sucesso" })
    }
}
