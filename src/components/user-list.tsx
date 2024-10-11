import { User } from "../types";
import { UserRow } from "./user-row";

export type Props = {
  users: User[];
};
export const UserList = ({ users }: Props) => {
  return (
    <div>
      {users.map((u) => {
        // we create a user row component for each user
        // its key is the user.id
        // we pass the `user` data to the component so component can handle the rest
        return <UserRow key={u.id} user={u} />;
      })}
    </div>
  );
};
