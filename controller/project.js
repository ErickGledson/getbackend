const Project = require('../model/project');

exports.list = async (request, response) => {
    try {
        const { limit = 10, offset = 0 } = request.query;
        const projects = await Project.find()
            .limit(parseInt(limit)).skip(parseInt(offset));

        response.status(200).json({ projects });
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}

exports.view = async (request, response) => {
    try {
        const { id } = request.params;

        const project = await Project.findOne({ _id: id });

        if (!project || project.length <= 0) {
            return response.status(404).json({ message: 'PROJECT_NOT_FOUND'});
        }

        response.status(200).json({ project });
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}

exports.create = async (request, response) => {
    const { project: projectData } = request.body;

    try {
        const project = new Project(projectData);
        await project.save();
        response.status(200).json({ message: 'ok' });
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}

exports.update = async (request, response) => {
    const { id } = request.params;
    const { project: projectData } = request.body;

    try {
        const project = await Project.updateOne({ _id: id }, projectData);
        if (project.nModified) {
            return response.status(200).json({ message: 'ok' });
        }

        return response.status(404).json({ message: 'PROJECT_NOT_FOUND' });
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}

exports.delete = async (request, response) => {
    const { id } = request.params;

    try {
        await Project.findOneAndRemove({
            _id: id
        });
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}