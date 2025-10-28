import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";


describe('Cidades - GetById', () => {

    it('Pegar o registro com base no Id', async() => {
      const res1 = await testServer.post('/cidades').send({
        nome: "Montes Claros"
      });

      expect(res1.statusCode).toEqual(StatusCodes.CREATED);

      const resSearch = await testServer.get(`/cidade/${res1.body}`).send();
      
      expect(resSearch.statusCode).toEqual(StatusCodes.OK);
    });



});