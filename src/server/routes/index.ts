import { Router } from "express";
import {StatusCodes} from 'http-status-codes';

import { cidadesController } from './../controllers';

const router = Router();


router.get('/', (_, res) => {
    return res.send("Olá, dev!");
});

router.post('/cidades', cidadesController.Create);


export {router};