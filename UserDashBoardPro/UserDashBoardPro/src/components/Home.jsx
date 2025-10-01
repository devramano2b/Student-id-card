import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import FormModal from "./FormModal";

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
      </div>
    </>
  );
}

function CreateUser() {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <button
        type="button"
        className="btn btn-primary createUser btn-modal"
        onClick={toggleModal}
      >
        Create User
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
            <FontAwesomeIcon icon={faHouse} size="2x" title="Home Page" />
          </a>
          {children}
        </div>
      </nav>
    </>
  );
}
