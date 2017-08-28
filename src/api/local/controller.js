import Local from './model';
import {
  STATUS_IN_ORDER
} from './../../constants';

import {
  index as i,
  create as c,
} from '../crud.tpl.js';

export {
  index,
  create,
  updateStatusTable,
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

function updateStatusTable(req, res) {
  return Local
    .update({
      'tables._id': req.params.id
    }, {
      $set: {
        'tables.0': req.body
      }
    })
    .exec()
    .then(local => res.json(local))
    .reject(err => res.status(404).json(err));
}

// function getTable(req, res) {
//   return Local
//     .update({
//       'tables._id': req.params.id
//     }, {
//       $addToSet: ,
//       $pull: ,
//       'tables._id.$': true
//     })
//     .exec()
//     .then(local => {
//       if (local[0].tables[0]) {
//         local[0].tables[0].status = STATUS_IN_ORDER;
//         console.log()
//         local.save()
//           .then(() => {
//             res.json(local[0].tables[0]);
//           })
//           .reject(err => res.status(404).json(err));
//       }
//       res.status(404).json({
//         error: true,
//         message: 'Resource not found'
//       });
//     })
//     .reject(err => res.status(404).json(err));
// }

function getTables(req, res) {
  return Local
    .findById(req.params.id)
    .exec()
    .then(local => res.json(local.tables))
    .reject(err => res.json(err));
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