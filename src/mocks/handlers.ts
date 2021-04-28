import { rest } from "msw";
import { User } from "../interfaces/User";

const mockedUsers: User[] = [
  { id: 1, name: "Rich", username: "Rich" },
  { id: 2, name: "Ariel", username: "Ariel" },
];

export const handlers = [
  rest.get("https://jsonplaceholder.typicode.com/users", (req, res, ctx) => {
    return res(ctx.json(mockedUsers));
  }),
];
