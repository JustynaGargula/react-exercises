import React, {useEffect} from "react";

export default function ApiUsers(){
  const apiUrl = "https://fakerapi.it/api/v2/users";
  const apiName= "Faker API";

  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const getUsers = () => {
    setLoading(true);
    setError(null);
    fetch(apiUrl)
      .then(res => {
        if(!res.ok){
          throw new Error("Could not load users.");
        } else {
          return res.json()
        }
        })
      .then(rjson => {setUsers(rjson.data)})
      .catch((err) => setError(err.message))
      .finally(() => {setLoading(false)});
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h1>Users from API</h1>
      { loading && <p>Loading users...</p> }
      { error ? <p>Error: {error}</p> : (
        <ul>
          {users.map((user) => (
          <li className="field" key={user.id}>
            <p className="bold">{user.username}</p>
            <div className="indented-field">
              <p>Name: {user.firstname} {user.lastname}</p>
              <p>Email: {user.email}</p>
            </div>
          </li>
          ))}
        </ul>) }

      <button onClick={getUsers} disabled={loading} >Refresh users</button>

      <footer>Users were fetched from <a href={apiUrl}>{apiName}</a></footer>
    </>
  )
}