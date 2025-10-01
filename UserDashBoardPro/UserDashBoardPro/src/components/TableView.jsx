import { useState, useEffect } from "react";
export default function TableView() {
  const [users, setUsers] = useState([]);

  //Show or Load the users from the local Storage when component mounts

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

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
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.department}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}
