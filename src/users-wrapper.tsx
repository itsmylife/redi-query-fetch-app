// This is a component to fetch the data and spread it to the children
import { useEffect, useState } from "react";
import { fetchUsers } from "./api";
import { User } from "./types";
import { UserList } from "./components/user-list";

export const UsersWrapper = () => {
  const [allUsers, setAllUsers] = useState<User[]>([]);

  useEffect(() => {
    async function fetchMyUsers() {
      const fetchedUsers = await fetchUsers();
      setAllUsers(fetchedUsers);
    }

    fetchMyUsers();
  }, []);

  return <UserList users={allUsers} />;
};
