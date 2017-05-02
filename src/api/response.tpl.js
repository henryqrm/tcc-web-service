import _ from 'lodash';

export {
    respondWithResult,
    handleError,
    handleEntityNotFound,
    saveUpdates,
    removeEntity
};

function respondWithResult(res, statusCode) {
    const code = statusCode || 200;
    return entity => {
        if (entity) {
            res.status(code).json(entity);
        }
    };
}

function handleError(res, statusCode) {
    const code = statusCode || 500;
    return err => {
        res.status(code).send(err);
    }
}

function handleEntityNotFound(res) {
    return entity => {
        if (!entity) {
            res.status(404).end();
            return null;
        }
        return entity;
    }
}

function saveUpdates(updates) {
    return entity => {
        const updated = _.merge(entity, updates);
        return updated.save()
            .then(entityUpdated => {
                return entityUpdated;
            });
    }
}

function removeEntity(res) {
    return function (entity) {
        if (entity) {
            return entity.remove()
                .then(() => {
                    res.status(204).end();
                });
        }
    };
}