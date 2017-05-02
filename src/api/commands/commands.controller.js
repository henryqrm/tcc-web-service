import Commands from './commands.model';
import {
    respondWithResult,
    handleEntityNotFound,
    handleError,
    saveUpdates
} from './../response.tpl';

export {
    index,
    update
};

function index(req, res) {
    return Commands.find().exec()
        .then(respondWithResult(res))
        .catch(handleError(res));
}

function update(req, res) {
    if (req.body._id) {
        delete req.body._id;
    }
    return Commands.findById(req.params.id).exec()
        .then(handleEntityNotFound(res))
        .then(saveUpdates(req.body))
        .then(respondWithResult(res))
        .catch(handleError(res));
}