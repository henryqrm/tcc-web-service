import Command from './model';

import {
    index as i,
    create as c,
    show as s,
    update as u
} from '../crud.tpl.js';

export {
    index,
    create,
    show,
    update,
    addProduct
};

function addProduct(req, res) {
    return Command.findById(req.params.id)
        .then();
}

function update(req, res) {
    return u(Command, req, res);
}

function index(req, res) {
    return i(Command, req, res);
}

function create(req, res) {
    return c(Command, req, res);
}

function show(req, res) {
    return s(Command, req, res);
}