import {
    respondWithResult,
    handleError
} from './response.tpl';

export function index(Entity, req, res, fnAfter, fnBefore) {
    if (!fnAfter) {
        fnAfter = (entity) => {
            return entity;
        }
    }
    if (fnBefore) {
        res.body = fnBefore(req.body);
    }
    return Entity.find().exec()
        .then(fnAfter)
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
        res.body = fnBefore(req.body);
    }
    return Entity.create(req.body)
        .then(fnAfter)
        .then(respondWithResult(res, 201))
        .catch(handleError(res));
}