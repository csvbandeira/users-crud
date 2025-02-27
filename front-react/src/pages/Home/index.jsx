import "./style.css";
import Trash from "./../../assets/trash.svg";

function Home() {
  const users = [
    { id: "122asd", name: "Carlos", age: "21", email: "carlos@email.com" },
    { id: "3433ad", name: "Clovis", age: "51", email: "clovis@email.com" },
    {
      id: "94898afg",
      name: "Catarina",
      age: "21",
      email: "catarina@email.com",
    },
  ];

  return (
    <div className="container">
      <form action="">
        <h1>User Registration</h1>
        <input type="text" name="name" placeholder="Name" />
        <input type="number" name="age" placeholder="Age" />
        <input type="email" name="email" placeholder="E-mail" />
        <button type="submit">Create</button>
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
          <button>
            <img src={Trash} alt="" />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
