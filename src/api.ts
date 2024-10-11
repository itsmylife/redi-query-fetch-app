import axios from "axios";
import { User } from "./types";

export const api = axios.create({
  baseURL: "https://www.melivecode.com/api/",
  withCredentials: false,
});

export const fetchUsers = () => {
  const allUsers = api
    .get("/users")
    .then((response) => {
      // we get the user data, let's return it
      return response.data;
    })
    .catch((err) => {
      console.error(err);
      // There is an error, we must return empty array
      return [];
    });

  console.log(allUsers);

  return allUsers;
};

export const createUser = (newUser: Omit<User, "id">) => {
  api.post("/users/create", newUser).then((response) => {
    console.log(response);
  });
};

export const deleteUser = (id: number) => {
  // here there is a catch
  // usually we don't send a data/body with delete request.
  // but according to the specification we may send a body.
  // and the api we use, requires a body with delete request.
  // How to send body with axios delete method: https://stackoverflow.com/questions/51069552/axios-delete-request-with-request-body-and-headers
  // Specification https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/DELETE
  return api
    .delete(`/users/delete`, {
      data: {
        id,
      },
    })
    .then((response) => {
      console.log(response);
    });
};
