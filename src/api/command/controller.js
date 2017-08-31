import Command from './model';

import {
    index as i,
    create as c,
    show as s,
} from '../crud.tpl.js';

export {
    index,
    create,
    show,
};

function index(req, res) {
    return i(Command, req, res);
}

function create(req, res) {
    return c(Command, req, res);
}

function show(req, res) {
    return s(Command, req, res);
}