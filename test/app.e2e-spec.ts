import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('/products (GET)', () => {
    return request(app.getHttpServer()).get('/products').expect(200).expect([]);
  });

  it('/products/:productId (GET)', () => {
    return request(app.getHttpServer())
      .get('/products/1')
      .expect(200)
      .expect({});
  });

  it('/products/:productId (DELETE)', () => {
    return request(app.getHttpServer())
      .delete('/products/1')
      .expect(204)
      .expect('');
  });
});
