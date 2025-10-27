import { Request, Response } from 'express';
import * as yup from 'yup';
import { validation } from '../../shared/middlewares';
import { StatusCodes } from 'http-status-codes';

interface IQueryProps {
    id?: number;
}
// Schema de verificação de body do Yup


// exporta a funação que vai fazera validação pega o schema
export const getByIdValidation = validation( (getSchema) => ({
    params: getSchema<IQueryProps>(yup.object().shape({
        id: yup.number().optional().moreThan(0)
    })),
}));

export const getById = async (req: Request<{}, {}, {}, IQueryProps>, res:Response) => {
    console.log(req.params);

    
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Não implementado");
};
