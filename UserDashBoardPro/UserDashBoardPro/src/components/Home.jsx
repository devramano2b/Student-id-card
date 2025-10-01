import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import FormModal from "./FormModal";

import TableView from "./TableView";

export default function Home() {
  return (
    <>
      <UI></UI>
    </>
  );
}

function UI() {
  return (
    <>
      <div className="ui-first container">
        <Navbar>
          <CreateUser />
        </Navbar>
        <TableView />
      </div>
    </>
  );
}

function CreateUser() {
  const [modal, setModal] = useState(false);
  const [buttonText, setButtonText] = useState("Create User");

  //
  const toggleModal = () => {
    setModal(!modal);
    setButtonText(modal ? "Create User" : "Home");
  };
  return (
    <>
      <button
        type="button"
        className="btn btn-primary createUser btn-modal"
        onClick={toggleModal}
        style={{
          fontWeight: "600",
          boxShadow: " 2px 4px 6px rgba(0,0,0,0.3)",
        }}
      >
        {buttonText}
      </button>
      <FormModal isOpen={modal} onClose={toggleModal} />
    </>
  );
}

function Navbar({ children }) {
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="#">
            <FontAwesomeIcon
              icon={faHouse}
              size="2x"
              title="Home Page"
              style={{ boxShadow: " 2px 3px 5px rgba(221, 196, 196, 0.3)" }}
            />
          </a>
          {children}
        </div>
      </nav>
    </>
  );
}
