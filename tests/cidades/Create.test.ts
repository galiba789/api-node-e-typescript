import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";



describe('Cidades - Create', () => {


    it('Criar registrio', async () => {
        const res1 = await testServer.post('/cidades').send({
            nome: "Montes Claros"
        });

        expect(res1.statusCode).toEqual(StatusCodes.CREATED);
        expect(typeof res1.body).toEqual('number');
    });
    it('Tenta Criar um registro com nome muito curto', async () => {
        const res1 = await testServer.post('/cidades').send({
            nome: "Montes Claros"
        });

        expect(res1.statusCode).toEqual(StatusCodes.CREATED);
        expect(typeof res1.body).toEqual('number');
    });
});