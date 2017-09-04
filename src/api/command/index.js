import {
    Router
} from 'express';

import {
    index,
    create,
    show,
    update,
    addProduct
} from './controller';

const router = new Router();

router.get('/', index);
router.get('/:id', show);
router.post('/', create);
router.patch('/:id', update);
router.put('/:id', update);
router.put('/:id/product', addProduct);

export default router;