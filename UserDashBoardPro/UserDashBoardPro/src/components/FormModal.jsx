import { useState } from "react";
export default function FormModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
  });
  if (!isOpen) return null;
  // ---------------------handle Change -------------------------
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  //   -----------------------handle button Submit

  const handleSubmit = (e) => {
    e.preventDefault();
    //store the local storage
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    //add new user
    localStorage.setItem("users", JSON.stringify([...existingUsers, formData]));

    //optional actions after storing

    alert("User added Successfully !");
    setFormData({ name: "", email: "", department: "" });
    onClose();
  };
  // --------------------------------
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <form
          onSubmit={handleSubmit}
          className="form border border-secondary p-3 "
          style={{
            minHeight: "50vh",
            maxWidth: "80vw",
            marginTop: "30px",
            borderRadius: "10px",
            boxShadow:
              "0 0 5px rgba(161, 61, 255, 1),  0 0 8px rgba(187, 114, 255, 1), 0 0 6px #0ff",
          }}
        >
          {/* --------------------Form Heading------------ */}

          <img
            src="https://img.freepik.com/free-vector/add-new-user_78370-4710.jpg?semt=ais_hybrid&w=740&q=80"
            alt="Add User"
            style={{
              width: "80px",
            }}
          />
          <h1
            style={{
              fontSize: "xx-large",
              textAlign: "center",

              fontWeight: "700",
              fontFamily: "sans-serif",
              marginBottom: "18px",
            }}
          >
            Add User{" "}
          </h1>

          <div
            className="center"
            style={{
              left: "50%",
              top: "50%",
            }}
          >
            <div className="row border  w-75 mx-auto">
              {/* ---------------Name Input------------- */}
              <label
                htmlFor="inputName"
                className="col-sm-2 col-form-label fw-bold"
              >
                Name
              </label>
              <div className="col-sm-10 mb-4 ">
                <input
                  type="text"
                  className=" border border-dark Required w-50"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              {/* ------------------Email Input------------- */}
              <label
                htmlFor="inputEmail"
                className="col-sm-2 col-form-label fw-bold"
              >
                Email
              </label>
              <div className="col-sm-10 mb-4">
                <input
                  type="text"
                  className=" border border-dark w-50 rounded-lg "
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              {/* ------------------Dept Input------------ */}
              <label
                htmlFor="inputDept"
                className="col-sm-2 col-form-label fw-bold"
              >
                Department
              </label>
              <div className="col-sm-10 mb-4">
                <input
                  type="text"
                  className=" border border-dark w-50 "
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  required
                />
              </div>

              <div
                className="buttons"
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  marginBottom: "10px",
                }}
              >
                <button
                  onClick={onClose}
                  className="btn btn-danger w-25 "
                  type="button"
                >
                  Cancel
                </button>
                <button
                  className="btn btn-primary w-25 "
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
