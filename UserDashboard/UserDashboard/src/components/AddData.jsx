import { useState } from "react";

export default function AddData({ onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    id: "",
    email: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted data:", formData);

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    //add new user
    existingUsers.push(formData);

    //save back to local storage
    localStorage.setItem("users", JSON.stringify(existingUsers));

    console.log("Saved to localStorage:", formData);
    onClose();
  };

  return (
    <div
      style={{
        minWidth: "70%",
        border: "2px solid red",
        minHeight: "82vh",
        borderRadius: "8px",
        overflowX: "hidden",
        overflowY: "auto",
        padding: "15px",
      }}
    >
      {/* Navbar/Header */}
      <nav className="navbar navbar-light bg-light mb-4">
        <a className="navbar-brand" href="#">
          <img
            src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="user"
          />
          &nbsp; Add User
        </a>
      </nav>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        {/* User Name */}
        <div className="form-group">
          <label className="bold">User Name:</label>
          <input
            type="text"
            id="inputName"
            onChange={handleChange}
            value={formData.name}
            name="name"
            className="form-control border-dark mb-4 w-50 text-center mx-auto"
            placeholder="Enter name"
            required
          />
        </div>

        {/* User ID */}
        <div className="form-group">
          <label className="bold">User Id:</label>
          <input
            type="text"
            id="inputId"
            onChange={handleChange}
            value={formData.id}
            name="id"
            className="form-control border-dark mb-4 w-50 text-center mx-auto"
            placeholder="Enter user id"
            required
          />
        </div>

        {/* User Email */}
        <div className="form-group">
          <label className="bold">User Email:</label>
          <input
            type="email"
            id="inputEmail"
            onChange={handleChange}
            value={formData.email}
            name="email"
            className="form-control border-dark mb-4 w-50 text-center mx-auto"
            placeholder="Enter email"
            required
          />
        </div>

        {/* Buttons */}
        <div className="d-flex justify-content-center gap-3 mt-4">
          <button
            type="button"
            className="btn btn-secondary  col-3"
            onClick={onClose}
            style={{
              width: "80px",
            }}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="btn btn-primary  col-3"
            style={{
              width: "80px",
            }}
          >
            Add User
          </button>
        </div>
      </form>
    </div>
  );
}
