// src/mocks/handlers.js
import { rest } from "msw";

const useUserApiUrl = process.env.REACT_APP_URL_API_USERS;

export const handlers = [
  rest.post(`${useUserApiUrl}/users/login`, async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ token: "token" }));
  }),
];
