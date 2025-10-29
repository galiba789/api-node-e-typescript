import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";


describe('Cidades - GetById', () => {

    it('Pegar o registro com base no Id', async() => {
      const res1 = await testServer.post('/cidades').send({
        nome: "Montes Claros"
      });

      expect(res1.statusCode).toEqual(StatusCodes.CREATED);
      
      const resSearch = await testServer.get(`/cidades/${res1.body}`);
      
      expect(Number(resSearch.header['content-length'])).toBeGreaterThan(0);
      expect(resSearch.statusCode).toEqual(StatusCodes.OK);
    });



});