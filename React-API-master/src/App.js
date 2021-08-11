import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import UserList from "./UserList";

function App() {
  const [listOfUser, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://jsonplaceholder.typicode.com/users");

      setUsers(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <UserList users={listOfUser} />
    </div>
  );
}

export default App;
