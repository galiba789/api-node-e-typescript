import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";

interface ICidade {
    nome:string
}

export const Create = (req: Request<{},{},ICidade>, res: Response) => {
    if (req.body.nome === undefined){
        return res.status(StatusCodes.BAD_REQUEST).send("informe o nome")
    } else if(req.body.nome.length < 3 ){
        return res.status(StatusCodes.BAD_REQUEST).send("O atributo nome precisa ter mais de 3 caracteres")
    }
    console.log(req.body.nome);

    return res.send("Create!");
};
