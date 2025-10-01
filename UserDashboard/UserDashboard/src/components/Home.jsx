import AddData from "./AddData";
import { useState } from "react";
import "./Home.css";
export default function Home() {
  return (
    <>
      <HomePage />
    </>
  );
}

function HomePage() {
  return (
    <>
      <div className="homepage-div">{<CreateUser />}</div>
    </>
  );
}

function CreateUser() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* -------------------Container for heading------------ */}
      <div
        className="createuser-header"
        style={{
          display: "flex",
        }}
      >
        {/* -------------------Heading-------------------- */}
        <div className="createuser-heading col-3 text-center">
          <h1>User Data</h1>{" "}
        </div>

        {/* -------------------Button--------------- */}
        <div>
          {isOpen && <AddData />}
          <button
            style={{
              position: "relative",

              left: "12em",
              width: "160px",
              fontSize: "large",
              fontWeight: "600",
              borderRadius: "10px",
            }}
            class="btn btn-primary btn-lg col-4"
            onClick={handleOpen}
          >
            Create User
          </button>
        </div>

        {/* //Cancel button */}
        <div>
          <button
            style={{
              position: "relative",

              left: "12em",
              width: "160px",
              fontSize: "large",
              fontWeight: "600",
              borderRadius: "10px",
            }}
            class="btn btn-primary btn-lg col-4"
            onClick={handleClose}
          >
            Cancel
          </button>
        </div>
      </div>

      {/* -------------------Pop-up (AddData)---------------- */}
    </>
  );
}
