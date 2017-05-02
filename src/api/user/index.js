import {
    Router,
} from 'express';
import {
    index,
    show,
    create,
    update,
    destroy,
    auth
} from './user.controller';

const router = new Router();

router.get('/', index);
router.get('/:id', show);
router.post('/', create);
router.put('/:id', update);
router.patch('/:id', update);
router.delete('/:id', destroy);
router.post('/auth', auth);

export default router;