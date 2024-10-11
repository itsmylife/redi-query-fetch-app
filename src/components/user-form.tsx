import { useState } from "react";
import { User } from "../types";
import { createUser } from "../api";

export const UserForm = (props: any) => {
  const [email, setEmail] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [username, setUsername] = useState("");

  const handleNewUser = () => {
    // We cannot set an id for the user.
    // After user creation its id will be set.
    // So here we use a little trick
    // It is from typescript itself.
    // it omits the id field;
    const newUser: Omit<User, "id"> = {
      email,
      fname,
      lname,
      username,
      // hard coded avatar url
      avatar: "https://www.melivecode.com/users/2.png",
    };

    createUser(newUser);
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "200px" }}>
      <input
        type="text"
        value={fname}
        onChange={(e) => setFname(e.target.value)}
        placeholder="first name"
      />
      <input
        type="text"
        value={lname}
        onChange={(e) => setLname(e.target.value)}
        placeholder="last name"
      />
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
      />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />
      <button onClick={handleNewUser}>Create a new user</button>
    </div>
  );
};
