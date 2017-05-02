import Tag from './tag.model';

import {
    respondWithResult,
    handleError
} from './../response.tpl';


export {
    index
};

function index(req, res) {
    return Tag.find().exec()
        .then(respondWithResult(res))
        .catch(handleError(res));
}