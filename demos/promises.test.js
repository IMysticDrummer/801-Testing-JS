import { failedRequest, successfulRequest, randomRequest } from './promises.js';
describe('callback style', () => {
  it('should fail the request failedRequest', (done) => {
    expect.assertions(1);
    failedRequest().catch((e) => {
      expect(e.message).toMatch(/failed/i);
      done();
    });
  });
  // it.todo('should have status 200 the request successfulRequest')
  it('should have status 200 the request successfulRequest', (done) => {
    expect.assertions(1);
    successfulRequest().then((response) => {
      expect(response.status).toBe(200);
      done();
    });
  });
});

describe('promise style', () => {
  it('should have status 200 the request successfulRequest', () => {
    // SUPER UTIL PARA CODIGO ASINCRONO
    expect.assertions(1);
    return successfulRequest().then((response) => {
      expect(response.status).toEqual(200);
    });
  });
  // it.todo('should fail the request failedRequest')
  it('should fail the request failedRequest', () => {
    expect.assertions(1);
    return failedRequest().catch((error) => {
      expect(error.message).toMatch(/request failed/i);
    });
  });
});

describe('.rejects/.resolves style', () => {
  it('should fail the request failedRequest', () => {
    expect.assertions(1);
    return expect(failedRequest()).rejects.toThrow(/request failed/i);
  });
  // it.todo('should have status 200 the request successfulRequest')
  it('should have status 200 the request successfulRequest', () => {
    expect.assertions(1);
    return expect(successfulRequest()).resolves.toMatchObject({ data: {} });
  });
});

describe('async & await style', () => {
  it('should have status 200 the request successfulRequest', async () => {
    expect.assertions(1);
    try {
      const response = await successfulRequest();
      expect(response.status).toBeGreaterThanOrEqual(200);
    } catch (e) {}
  });
  // it.todo('should fail the request failedRequest')
  it('should fail the request failedRequest', async () => {
    expect.assertions(1);
    try {
      await failedRequest();
    } catch (e) {
      expect(e.response.status).toBeGreaterThanOrEqual(400);
    }
  });
  // it.todo('should make 1 assertion for randomRequest')
  it('should make 1 assertion for randomRequest', async () => {
    expect.assertions(1);
    try {
      const response = await randomRequest();
      expect(response.status).toBeGreaterThanOrEqual(200);
    } catch (e) {
      expect(e.response.status).toBeGreaterThanOrEqual(400);
    }
  });
});
