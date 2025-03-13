import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('QuotesController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterEach(async () => {
    await app.close();
  });

  it('/quotes/random (GET)', () => {
    return request(app.getHttpServer())
      .get('/quotes/random')
      .expect(200)
      .expect((res) => {
        expect(res.body).toHaveProperty('success', true);
        expect(res.body).toHaveProperty('data');
        expect(res.body.data).toHaveProperty('text');
        expect(res.body.data).toHaveProperty('author');
      });
  });

  it('/quotes (GET)', () => {
    return request(app.getHttpServer())
      .get('/quotes')
      .expect(200)
      .expect((res) => {
        expect(res.body).toHaveProperty('success', true);
        expect(res.body).toHaveProperty('data');
        expect(Array.isArray(res.body.data)).toBe(true);
        expect(res.body.data.length).toBeGreaterThan(0);
      });
  });

  it('/quotes (POST)', () => {
    const newQuote = { text: 'E2E 테스트 명언', author: 'E2E 테스트 작가' };
    
    return request(app.getHttpServer())
      .post('/quotes')
      .send(newQuote)
      .expect(201)
      .expect((res) => {
        expect(res.body).toHaveProperty('success', true);
        expect(res.body).toHaveProperty('data');
        expect(res.body.data).toEqual(newQuote);
      });
  });
});