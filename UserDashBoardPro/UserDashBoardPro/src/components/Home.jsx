import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
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
  const [users, setUsers] = useState([]);
  const [showCreate, setShowCreate] = useState(false);
  const [fadeClass, setFadeClass] = useState("fade-in");

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    setUsers(storedUsers);
  }, []);

  const updateUsers = (newUsers) => {
    setUsers(newUsers);
    localStorage.setItem("users", JSON.stringify(newUsers));
  };
  //

  //
  const toggleCreateUser = () => {
    setFadeClass("fade-out");
    setTimeout(() => {
      setShowCreate(!showCreate);
      setFadeClass("fade-in");
    }, 400);
  };

  //
  //
  return (
    <>
      <div className="ui-first container">
        <Navbar>
          <CreateUser
            showCreate={showCreate}
            setShowCreate={setShowCreate}
            toggleCreateUser={toggleCreateUser}
          />
        </Navbar>

        <div className={`fade-wrapper ${fadeClass}`}>
          {showCreate ? (
            //animation

            <FormModal
              isOpen={true}
              onClose={() => setShowCreate(false)}
              users={users}
              setUsers={updateUsers}
            />
          ) : (
            <TableView users={users} setUsers={updateUsers} />
          )}
        </div>
      </div>
    </>
  );
}

function CreateUser({ showCreate, setShowCreate, toggleCreateUser }) {
  const [modal, setModal] = useState(false);
  const [buttonText, setButtonText] = useState("Create User");

  //
  const toggleModal = () => {
    toggleCreateUser();
    setModal(!modal);
    setButtonText(modal ? "Create User" : "Home");
    setShowCreate(!showCreate);
  };

  //
  //
  //
  return (
    <>
      <button
        type="button"
        className="btn btn-primary createUser btn-modal btn-hover-effect"
        onClick={toggleModal}
        style={{
          fontWeight: "600",
          boxShadow: " 2px 4px 6px rgba(0,0,0,0.3)",
        }}
      >
        {buttonText}
      </button>
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
