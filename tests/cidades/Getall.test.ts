import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";



describe('Cidades - GetAll', () => {

    it('Pegar os registros', async () => {
        const res1 = await testServer.get('/cidades').query({
            limit: 10,
            page: 1
        });

        expect(res1.statusCode).toEqual(StatusCodes.CREATED); 
        expect(typeof res1.body).toEqual("number");
    });
    it('Parametros < 1', async () => {
        const res1 = await testServer.get('/cidades').query({
            limit: 0,
            page: 0
        });

        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST); 
        expect(res1.body).toHaveProperty('errorsResult.query');
    });
    it('Parametros com String ao invés de numeros', async () => {
        const res1 = await testServer.get('/cidades').query({
            limit: "Oa",
            page:"asdas"
        });

        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST); 
        expect(res1.body).toHaveProperty('errorsResult.query');
    });
    it('Parametros Nulos', async () => {
        const res1 = await testServer.get('/cidades').query({
            limit: null,
            page:  null
        });

        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST); 
        expect(res1.body).toHaveProperty('errorsResult.query');
    });
    it('Parametros Indefinidos', async () => {
        const res1 = await testServer.get('/cidades').query({
            limit: undefined,
            page:  undefined
        });

        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST); 
        expect(res1.body).toHaveProperty('errorsResult.query');
    });
});