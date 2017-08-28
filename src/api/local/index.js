import {
  Router,
} from 'express';

import {
  index,
  setUseTable,
  getTable
} from './controller';

const router = new Router();

router.get('/', index);
router.get('/table', getTable);
router.post('/setUseTable', setUseTable);

export default router;
