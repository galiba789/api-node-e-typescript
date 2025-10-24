import { Router } from "express";

import { cidadesController } from './../controllers';

const router = Router();


router.get('/', (_, res) => {
    return res.send("Olá, dev!");
});

router.post('/cidades', cidadesController.createValidation ,cidadesController.Create);


export {router};