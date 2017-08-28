import Command from './model';

import {
    index as i,
    create as c,
} from '../crud.tpl.js';

export {
    index,
    create
};

function index(req, res) {
    i(Command, req, res);
}

function create(req, res) {
    c(Command, req, res);
}