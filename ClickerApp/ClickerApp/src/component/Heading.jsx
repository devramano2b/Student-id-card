import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointer } from "@fortawesome/free-regular-svg-icons";

export default function Heading() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "300px",
          backgroundColor: "#343A41",
          height: "58px",
        }}
      >
        <div
          className="icon"
          style={{
            position: "relative",
            bottom: "7px",
            margin: "2px",
          }}
        >
          <FontAwesomeIcon
            icon={faHandPointer}
            size="2xl"
            style={{ color: "#ffffff" }}
          />
        </div>
        <h1
          style={{
            color: "white",
          }}
        >
          Clicker
        </h1>
      </div>
    </>
  );
}
