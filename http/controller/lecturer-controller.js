class LecturerController {

    async all(request, response, next) {
        response.json(await request.app.get('lecturer.provider').all().catch(next))
    }
    async get(request, response, next) {
        response.json(await request.app.get('lecturer.provider').get(request.params.id).catch(next))
    }
    async create(request, response, next) {
        response.json(await request.app.get('lecturer.provider').create(request.lecturer).catch(next))
    }
    async update(request, response, next) {
        response.json(await request.app.get('lecturer.provider').update(request.lecturer).catch(next))
    }
    async delete(request, response, next) {
        response.json(await request.app.get('lecturer.provider').delete(request.params.id).catch(next))
    }
    importLecturer(request, response, next) {
        response.json(request.dataImport.map(async lecturer =>await request.app.get('lecturer.provider').importLecturer(lecturer).catch(next)))
    }
}
module.exports = LecturerController;