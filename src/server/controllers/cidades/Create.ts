import { RequestHandler } from 'express';
import * as yup from 'yup';
import { validation } from '../../shared/middlewares';
import { StatusCodes } from 'http-status-codes';

interface ICidade {
    nome: string;
   
}
// Schema de verificação de body do Yup


// exporta a funação que vai fazera validação pega o schema
export const createValidation = validation( (getSchema) => ({
    body: getSchema<ICidade>(yup.object().shape({
        nome: yup.string().required().min(3).nonNullable()
        })),
}));

export const Create: RequestHandler = async (req, res) => {
    console.log(req.body);


    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Não implementado");
};
