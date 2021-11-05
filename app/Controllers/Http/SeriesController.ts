import Serie from "App/Models/Series";

export default class SeriesController {
    async store({ request, response }) {
        let serie = new Serie()

        serie.name = request.body().name
        serie.genre = request.body().genre
        serie.seasons = request.body().seasons
        serie.episodes = request.body().episodes
        serie.year = request.body().year
        serie.direction = request.body().direction
        serie.synopsis = request.body().synopsis
        serie.folder = request.body().folder
        serie.trailer = request.body().trailer

        serie = await serie.save();

        return response.status(201).send(serie)
    }

    async index() {
        const serie = Serie.all()
        return serie;
    }

    async show({ request, response }) {
        const serie = await Serie.findBy('guid', request.param('guid'))

        if (!serie) return response.status(404).send({ message: "Série não encontrada" })

        return response.status(200).send(serie)
    }

    async update({ request, response }) {
        const serie = await Serie.findByOrFail('guid', request.param('guid'))

        serie.name = request.body().name
        serie.genre = request.body().genre
        serie.seasons = request.body().seasons
        serie.episodes = request.body().episodes
        serie.year = request.body().year
        serie.direction = request.body().direction
        serie.synopsis = request.body().synopsis
        serie.folder = request.body().folder
        serie.trailer = request.body().trailer

        await serie.save()

        return response.status(201).send(serie);
    }

    async destroy({ request, response }) {
        const serie = await Serie.findByOrFail('guid', request.param('guid'));
        await serie?.delete()
        return response.status(200).send({ message: "Série deletada com sucesso" })
    }
}
