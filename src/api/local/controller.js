import Local from './model';

import {
  index as i,
  create as c,
} from '../crud.tpl.js';

export {
  index,
  create,
  setUseTable,
  getTable
};

import {
  merge
} from 'lodash';

function index(req, res) {
  i(Local, req, res);
}

function create(req, res) {
  c(Local, req, res);
}

function getTable(req, res) {
  return Local
    .findOne({
      _id: req.params._id
    })
    .populate('tables')
    .exec()
    .then(table => {
      res.json(table);
    });
}

function setUseTable(req, res) {
  Local
    .findById(req.params._id)
    .exec()
    .then(oldTable => {
      // merge(oldTable, newTable);
      oldTable.status = 'Fazendo pedido';
      oldTable
        .save()
        .then(table => {
          res.json(table);
        });
    })
    .catch(err => {
      res.json(err);
    });
}
