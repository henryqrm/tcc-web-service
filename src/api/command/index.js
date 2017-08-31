import {
    Router
} from 'express';

import {
    index,
    create,
    show,
} from './controller';

const router = new Router();

router.get('/', index);
router.get('/:id', show);
router.post('/', create);

export default router;