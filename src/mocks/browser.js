import { setupWorker, rest } from 'msw';
import { initialResponseMock } from './initialResponseMock';
import { initResErrorMock } from './initResErrorMock';

const worker = setupWorker(
  rest.get('/api/v1/survey', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(initialResponseMock));
  }),

  rest.get('/api/v1/survey', (req, res, ctx) => {
    return res(ctx.status(500), ctx.json(initResErrorMock));
  }),

  rest.post('/api/v1/survey/:id/answers', (req, res, ctx) => {
    return res(ctx.status(201), ctx.json()); // передать response? submitVoteResponseMock
  }),
);

worker.start();
