import {
    Router
} from 'express';

import {
    index,
    create
} from './category.controller';

const router = new Router();

router.get('/', index);
router.post('/', create);

export default router;