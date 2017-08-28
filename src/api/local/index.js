import {
  Router,
} from 'express';

import {
  index,
  updateStatusTable
} from './controller';

const router = new Router();

router.get('/', index);
router.put('/table/:id', updateStatusTable)

export default router;