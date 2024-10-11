import { User } from "../types";
import { deleteUser } from "../api";

export type Props = {
  user: User;
};

export const UserRow = ({ user }: Props) => {
  const handleUserDelete = () => {
    deleteUser(user.id);
  };
  return (
    <div style={{ marginBottom: "16px" }}>
      Username: <span>{user.username}</span>
      <br />
      Full Name: <span>{`${user.fname} ${user.lname}`}</span>
      <br />
      <button onClick={handleUserDelete}>Delete</button>
    </div>
  );
};
