// src/mocks/handlers.js
import { rest } from 'msw';

const novels = [...Array(20)].map((_, index) => ({ id: `00${index}`, title: `sample 00${index}` }));

export const handlers = [
  rest.post('/login', (req, res, ctx) => {
    const { username } = req.body;

    return res(
      ctx.json({
        id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
        username,
        firstName: 'John',
        lastName: 'Maverick',
      }),
    );
  }),

  rest.get('/novels', (req, res, ctx) => res(
    ctx.json(novels),
  )),

  rest.get('/users/1', (req, res, ctx) => res(
    ctx.json({
      id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
      username: 'John Maverick',
      firstName: 'John',
      lastName: 'Maverick',
    }),
  )),

  rest.get('/users/2', (req, res, ctx) => res(
    ctx.json({
      id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
      username: 'Katsuki Niwa',
      firstName: 'Katsuki',
      lastName: 'Niwa',
    }),
  )),
];
