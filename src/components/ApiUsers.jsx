import React, {useEffect} from "react";


export default function ApiUsers(){
  const [users, setUsers] = React.useState([]);
  const apiUrl = "https://fakerapi.it/api/v2/users";
  const apiName= "Faker API";
  const getUsers = () => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(rjson => {setUsers(rjson.data)});
  }
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h1>Users from API</h1>
      <ul>
        {users.map((user) => { return (
          <li className="field" key={user.id}>
            <p className="bold">{user.username}</p><ul>
            <li>Name: {user.firstname} {user.lastname}</li>
            <li>Email: {user.email}</li>
          </ul></li>
          )})}
      </ul>
      <button onClick={getUsers}>Refresh users</button>

      <footer>Users were fetched from <a href={apiUrl}>{apiName}</a></footer>
    </>
  )
}