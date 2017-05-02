import {
    Router
} from 'express';
import {
    index,
    create
} from './commands.controller';

const router = new Router();

router.get('/', index);
router.get('/:id', show);
router.post('/', create);
router.put('/:id', update);

export default router;