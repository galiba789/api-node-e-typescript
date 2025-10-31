import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";


describe('Cidades - UpdateById', () => {

    it('Atualizar o registro', async () => {
        const res1 = await testServer.post('/cidades').send({
            nome: "Montes Claros"
        });

        expect(res1.statusCode).toEqual(StatusCodes.CREATED);

        console.log(res1.body); 
        const resSearch = await testServer.put(`/cidades/${res1.body}`).send({
            nome: "Lavras"
        });
        expect(resSearch.statusCode).toEqual(StatusCodes.NO_CONTENT);
    });
  
    it('Atualizando registro não existente', async () => {
        const resSearch = await testServer.put(`/cidades/10000`).send({
            nome: "Lavras"
        });
        expect(resSearch.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
    });
});