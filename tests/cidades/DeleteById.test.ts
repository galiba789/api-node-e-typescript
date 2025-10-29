import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";




describe('Cidades - DeleteById', () => {

    it('Deletar Registro', async () => {
        const res1 = await testServer.post('/cidades').send({
            nome: "Montes Claros"
        });

        expect(res1.statusCode).toEqual(StatusCodes.CREATED);

        const resSearch = await testServer.delete(`/cidades/${res1.body}`);

        expect(resSearch.statusCode).toEqual(StatusCodes.NO_CONTENT);
    });

    it('Tenta apagar registro que não existe', async () => {
        const res1 = await testServer.delete('/cidades/9999').send();

        expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
        expect(res1.body).toHaveProperty('errors.default');
    });
});