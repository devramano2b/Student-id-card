import { useState } from "react";
export default function TableView({ users, setUsers }) {
  // const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  //Show or Load the users from the local Storage when component mounts

  // useEffect(() => {
  //   const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
  //   setUsers(storedUsers);
  // }, [users]);

  // handle user event handler

  function handleUser(user) {
    setSelectedUser(user);
  }

  function handleClose() {
    setSelectedUser(null);
  }
  // handleDelete
  function handleDelete(id) {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    const updatedUsers = storedUsers.filter((u) => u.id !== id);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
  }

  //
  return (
    <>
      <div>
        <div className="container mt-4"></div>
        <h2 className="text-center mb-3">User List</h2>
        {users.length === 0 ? (
          <p className="text-muted text-center">NO Users added yet .</p>
        ) : (
          <table className="table table-bordered table-striped text-center">
            <thead className="table-dark">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Department</th>
                <th>View Data</th>
                <th>Delete User</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td> {user.department}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-warning btn-hover-effects"
                      onClick={() => handleUser(user)}
                      style={{
                        fontWeight: "500",
                        boxShadow: " 2px 4px 6px rgba(0,0,0,0.3)",
                      }}
                    >
                      View User
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger  btn-hover-effects"
                      onClick={() => handleDelete(user.id)}
                      style={{
                        fontWeight: "500",
                        boxShadow: " 2px 4px 6px rgba(0,0,0,0.3)",
                      }}
                    >
                      Delete User
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {selectedUser && <UserView user={selectedUser} onClose={handleClose} />}
      </div>
    </>
  );
}

{
  /* 🔥 How it works now

When you click "View User", it calls handleUser(user) and updates selectedUser.

React re-renders and shows <UserView user={selectedUser} /> below the table.

You can style this as a card, modal, or inline detail view.*/
}

function UserView({ user, onClose }) {
  // const [view, setView] = useState(user);

  return (
    <>
      <div className="card ">
        <div className="container d-flex justify-content-between align-items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
            alt="user-Image"
            style={{
              width: "180px",
            }}
            className="card-img-top"
          />
          <button
            type="button"
            className="btn btn-danger w-25"
            onClick={onClose}
            style={{
              fontWeight: "700",
              boxShadow: " 2px 4px 6px rgba(0,0,0,0.3)",
              height: "40px",
            }}
          >
            Close
          </button>
        </div>
        <div className="card-body">
          <ul className="list-group">
            <li className="list-group-item list-group-item-primary">
              {" "}
              <label>Name: </label> <span> {user.name}</span>
            </li>
            <li className="list-group-item list-group-item-primary">
              {" "}
              <label>Email:</label> <span> {user.email}</span>
            </li>
            <li className="list-group-item list-group-item-primary">
              {" "}
              <label>Department:</label> <span> {user.department}</span>
            </li>
          </ul>
        </div>
      </div>
      {/* {view && <UserView user={setView} />} */}
    </>
  );
}
