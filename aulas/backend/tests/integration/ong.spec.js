const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
  let ongResponse;
  let incidentResponse;
  beforeAll(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('should be able to create a new ong', async () => {
    ongResponse = await request(app)
      .post('/ongs')
      .send({
        name: 'TEGM2',
        email: 'tué@gmail.com',
        whatsapp: '8478579642',
        city: 'Alagoinha',
        uf: 'PE',
      });
    expect(ongResponse.body).toHaveProperty('id');
    expect(ongResponse.body.id).toHaveLength(8);
  });

  it('should to logon', async () => {
    const logonResponse = await request(app)
      .post('/sessions')
      .send({
        id: ongResponse.body.id,
      });

    expect(logonResponse.body).toHaveProperty('name');
  });

  it('should to create an incident', async () => {
    incidentResponse = await request(app)
      .post('/incidents')
      .send({
        title: 'Caso teste',
        description: 'Detalhe do caso',
        value: '200',
      })
      .set('authorization', ongResponse.body.id);
    expect(incidentResponse.body).toHaveProperty('id');
  });

  it('should to index the incidents of specific ong', async () => {
    const indexOngIncidents = await request(app)
      .get('/profile')
      .set('authorization', ongResponse.body.id);
    expect(indexOngIncidents.body[0]).toHaveProperty(
      'description',
      'ong_id',
      'tittle',
      'value'
    );
  });
  it('should to index all the incidents', async () => {
    const indexIncidents = await request(app).get('/incidents');
    expect(indexIncidents.body[0]).toHaveProperty(
      'id',
      'title',
      'description',
      'value',
      'ong_id',
      'name',
      'email',
      'whatsapp',
      'city',
      'uf'
    );
  });
  it('should to delete an incident', async () => {
    const deleteResponse = await request(app)
      .delete(`/incidents/${incidentResponse.body.id}`)
      .set('authorization', ongResponse.body.id);
    expect(deleteResponse.status).toBe(204);
  });
});
