import "./style.css";
import Trash from "./../../assets/trash.svg";
import api from "./../../services/api.js";
import { useEffect, useRef, useState } from "react";

function Home() {
  const [users, setUsers] = useState([]);

  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  const fetchUsers = async () => {
    const rawUsers = await api.get("/users");
    setUsers(rawUsers.data);
  };

  const createUsers = async () => {
    try {
      await api.post("/users", {
        name: inputName.current.value,
        age: inputAge.current.value,
        email: inputEmail.current.value,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const deleteUsers = async (id) => {
    try {
      await api.delete(`/users/${id}`);
    } catch (err) {
      console.log(err);
    } finally {
      fetchUsers();
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="container">
      <form>
        <h1>User Registration</h1>
        <input type="text" name="name" placeholder="Name" ref={inputName} />
        <input type="number" name="age" placeholder="Age" ref={inputAge} />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          ref={inputEmail}
        />
        <button type="submit" onClick={createUsers}>
          Create
        </button>
      </form>

      {users.map((user) => (
        <div key={user.id} className="card">
          <div>
            <p>
              Name: <span>{user.name}</span>
            </p>
            <p>
              Age: <span>{user.age}</span>
            </p>
            <p>
              Email: <span>{user.email}</span>
            </p>
          </div>
          <button onClick={() => deleteUsers(user.id)}>
            <img src={Trash} alt="Delete user" />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
