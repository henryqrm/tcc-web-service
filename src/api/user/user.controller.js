import _ from 'lodash';
import User from './user.model';
import {
    respondWithResult,
    saveUpdates,
    removeEntity,
    handleError,
    handleEntityNotFound
} from './../response.tpl';

export {
    index,
    show,
    create,
    update,
    destroy,
    auth
};

function index(req, res) {
    return User.find().exec()
        .then(respondWithResult(res))
        .catch(handleError(res));
}

function show(req, res) {
    return User.findById(req.params.id).exec()
        .then(handleEntityNotFound(res))
        .then(respondWithResult(res))
        .catch(handleError(res));
}

function create(req, res) {
    console.log(req.body);
    return User.create(req.body)
        .then(respondWithResult(res, 201))
        .catch(handleError(res));
}

function update(req, res) {
    if (req.body._id) {
        delete req.body._id;
    }
    return User.findById(req.params.id).exec()
        .then(handleEntityNotFound(res))
        .then(saveUpdates(req.body))
        .then(respondWithResult(res))
        .catch(handleError(res));
}

function destroy(req, res) {
    return User.findById(req.params.id).exec()
        .then(handleEntityNotFound(res))
        .then(removeEntity(res))
        .catch(handleError(res));
}

function auth(req, res) {
    if (!req.body.password) {
        res.status(401).end();
        return;
    }
    return User.find({
            email: req.body.email
        })
        .exec()
        .then(entity => {
            if (entity[0].password === req.body.password) {
                res.status(200).json({
                    id: entity[0]._id,
                    name: entity[0].name,
                    email: entity[0].email
                });
            } else {
                res.status(401).end();
            }
        });
}