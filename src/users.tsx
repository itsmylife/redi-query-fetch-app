import userData from './db/users.json'
import {User} from "./types";
import {useState} from "react";


export const Users = () => {
    const [newUserName, setNewUserName] = useState<string>("");

    const [allUsers, setAllUsers] = useState<User[]>(userData)


    const handleClick = () => {
        console.log("i am gonna create " + newUserName);
        const newUser: User = {
            name: newUserName,
            id: Date.now(),
            email:"sdfasdf@gmail.com",
            numberOfPets: 0,
        }

        const newAllUsers = [...userData];
        newAllUsers.push(newUser);

        setAllUsers(newAllUsers);
    }

    return (<div>

        <ul>
            {
                allUsers.map((user) => {
                    return <li key={user.id}>{user.name}</li>
                })
            }
        </ul>

        <div>
            <input type="text" onChange={(e) => setNewUserName(e.target.value)} />
            <button onClick={handleClick}>Submit</button>
        </div>

    </div>)
}
