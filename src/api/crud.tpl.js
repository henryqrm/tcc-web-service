import {
    respondWithResult,
    handleError,
    handleEntityNotFound,
    saveUpdates,
} from './response.tpl';

export function index(Entity, req, res, fnAfter, fnBefore) {
    if (!fnAfter) {
        fnAfter = (entity) => {
            return entity;
        }
    }
    if (fnBefore) {
        res.body = fnBefore(req.body, req.params);
    }
    return Entity.find().exec()
        .then(fnAfter)
        .then(respondWithResult(res))
        .catch(handleError(res));
}

export function update(Entity, req, res, fnAfter, fnBefore) {
    if (!fnAfter) {
        fnAfter = (entity) => {
            return entity;
        }
    }
    if (fnBefore) {
        res.body = fnBefore(req.body, req.params);
    }
    if (req.body._id) {
        delete req.body._id;
    }
    return Product.findById(req.params.id).exec()
        .then(handleEntityNotFound(res))
        .then(saveUpdates(req.body))
        .then(respondWithResult(res))
        .catch(handleError(res));
}

export function create(Entity, req, res, fnAfter, fnBefore) {
    if (!fnAfter) {
        fnAfter = (entity) => {
            return entity;
        }
    }
    if (fnBefore) {
        res.body = fnBefore(req.body, req.params);
    }
    return Entity.create(req.body)
        .then(fnAfter)
        .then(respondWithResult(res, 201))
        .catch(handleError(res));
}

export function show(Entity, req, res, fnAfter, fnBefore) {
    if (!fnAfter) {
        fnAfter = (entity) => {
            return entity;
        }
    }
    if (fnBefore) {
        res.body = fnBefore(req.body, req.params);
    }
    return Entity.findById(req.params.id)
        .then(fnAfter)
        .then(respondWithResult(res, 200))
        .catch(handleError(res));
}