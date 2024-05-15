import { Router } from "express";

import {
    comentarioPost,
    getComentarios
} from './comentario.controller.js';

const router = Router();

router.post('/', comentarioPost);

router.get('/',

getComentarios);

export default router;
