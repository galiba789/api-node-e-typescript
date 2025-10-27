import { Router } from "express";

import { cidadesController } from './../controllers';

const router = Router();


router.get('/', (_, res) => {
    return res.send("Olá, dev!");
});
 
router.get('/cidades', cidadesController.getAllValidation,cidadesController.getAll);
router.post('/cidades', cidadesController.createValidation ,cidadesController.Create);
router.get('/cidades/:id', cidadesController.getByIdValidation,cidadesController.getById);
router.put('/cidades/:id', cidadesController.updateByIdValidation,cidadesController.UpdateById);
router.delete('/cidades/:id', cidadesController.deleteByIdValidation,cidadesController.deleteById);


export {router};