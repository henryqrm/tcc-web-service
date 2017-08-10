import {
    Router,
} from 'express';
import {
    index,
    show,
    create,
    update,
    updateRated,
    destroy,
} from './product.controller';

const router = new Router();

router.get('/', index);
router.get('/:id', show);
router.post('/', create);
router.put('/:id', update);
router.patch('/:id', update);
router.put('/:id/rated', updateRated);
router.patch('/:id/rated', updateRated);
router.delete('/:id', destroy);

export default router;
