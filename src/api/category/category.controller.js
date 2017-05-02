import Category from './category.model';

import {
    index as i,
    create as c,
} from './../crud.tpl';

export {
    index,
    create
};

function index(req, res) {
    i(Category, req, res);
}

function create(req, res) {
    c(Category, req, res);
}