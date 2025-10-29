import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";



describe('Cidades - GetAll', () => {

    it('Pegar os registros', async () => {
        const res1 = await testServer.post('/cidades').send({ nome: 'Montes Claros' });

        expect(res1.statusCode).toEqual(StatusCodes.CREATED);

        const resBuscada = await testServer.get('/cidades').query({
            page: 1,
            limit: 1
        });
        expect(resBuscada.statusCode).toEqual(StatusCodes.OK);
    });
});