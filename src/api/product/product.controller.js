import Product from './product.model';

import {
    respondWithResult,
    saveUpdates,
    removeEntity,
    handleEntityNotFound,
    handleError
} from './../response.tpl.js';

export {
    index,
    show,
    create,
    update,
    destroy
};

// Gets a list of Products
function index(req, res) {
    return Product.find().exec()
        .then(respondWithResult(res))
        .catch(handleError(res));
}

// Gets a single Product from the DB
function show(req, res) {
    return Product.findById(req.params.id).exec()
        .then(handleEntityNotFound(res))
        .then(respondWithResult(res))
        .catch(handleError(res));
}

// Creates a new Product in the DB
function create(req, res) {
    console.log(req.body);
    return Product.create(req.body)
        .then(respondWithResult(res, 201))
        .catch(handleError(res));
}

// Updates an existing Product in the DB
function update(req, res) {
    if (req.body._id) {
        delete req.body._id;
    }
    return Product.findById(req.params.id).exec()
        .then(handleEntityNotFound(res))
        .then(saveUpdates(req.body))
        .then(respondWithResult(res))
        .catch(handleError(res));
}

// Deletes a Product from the DB
function destroy(req, res) {
    return Product.findById(req.params.id).exec()
        .then(handleEntityNotFound(res))
        .then(removeEntity(res))
        .catch(handleError(res));
}