import { testServer } from "../jest.setup";


describe('Cidades - GetById', () => {

    it('Pegar o registro com base no Id', async() => {
        const res1 = await testServer.get('cidades/:id').send({
            id: 1,
        });

        expect(res1.body)
    });



});