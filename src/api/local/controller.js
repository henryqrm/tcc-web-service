import Local from './model';

import {
  index as i,
  create as c,
} from '../crud.tpl.js';

export {
  index,
  create,
};

function index(req, res) {
  i(Local, req, res);
};

function create(req, res) {
  c(Local, req, res);
}
