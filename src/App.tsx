import React from "react";
import "./App.css";
import { UsersWrapper } from "./users-wrapper";
import { UserForm } from "./components/user-form";

function App() {
  return (
    <div className="App">
      <UserForm />
      <div id="divider" style={{ height: "30px" }} />
      <UsersWrapper />
    </div>
  );
}

export default App;
