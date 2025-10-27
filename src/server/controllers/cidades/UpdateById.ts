import { Request, Response } from 'express';
import * as yup from 'yup';
import { validation } from '../../shared/middlewares';
import { StatusCodes } from 'http-status-codes';

interface IParamProps {
    id?: number
}
interface IBodyProps {
   nome: string;
}
// Schema de verificação de body do Yup


// exporta a funação que vai fazera validação pega o schema
export const updateByIdValidation = validation( (getSchema) => ({
    params: getSchema<IParamProps>(yup.object().shape({
        id: yup.number().integer().required().moreThan(0),
    })),
    body: getSchema<IBodyProps>(yup.object().shape({
        nome: yup.string().required().min(3)
    }))
}));

export const UpdateById = async (req: Request<{}, {}, {}, {}>, res:Response) => {
    console.log(req.query);

    
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Não implementado");
};
