import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import { Schema, ValidationError } from "yup";

type TProperty = 'body' | 'header' | 'params' | 'query';

type TGetSchema = <T>(schema: Schema<T>) => Schema<T>;

type TGetAllSchemas = (getSchema: TGetSchema) => Partial<TAllSchemas>;

type TAllSchemas = Record<TProperty, Schema<any>>;

type TValidation = (getAllSchemas: TGetAllSchemas) => RequestHandler



export const validation: TValidation = (getAllSchemas) => async (req, res, next) => {
    const Schemas = getAllSchemas((schema) => schema);

    const errorsResult: Record<string, Record<string, string>> = {
    };

    Object.entries(Schemas).forEach(([key, Schema]) => {

        try {
            Schema.validateSync(req[key as TProperty], { abortEarly: false });
            // Esse next pula pra proxima função da rota, 
            // ou seja ele faz a verificação no middleware e vai pra proxima
        } catch (err) {
            const yupError = err as ValidationError;
            const errors: Record<string, string> = {};
            
            yupError.inner.forEach(error => {
                if (error.path === undefined) return;
                errors[error.path] = error.message;
            });

            errorsResult[key] = errors;
        }
        
    });
    

    if (Object.entries(errorsResult).length === 0) {
        return next();
    } else {
        return res.status(StatusCodes.BAD_REQUEST).json({ errorsResult });
    }
    
    // CreateBody extende do RequestHandler, pois ele já tem o request e response.

};