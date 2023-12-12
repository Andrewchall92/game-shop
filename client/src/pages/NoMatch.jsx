import "../styles/NoMatch/styles.css";
import errorGif from "../images/404.gif";

function NoMatch() {
  return (
    <div
      style={{
        backgroundColor: "lightgray",
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div>
        <img className="p-40" src={errorGif} alt="ATAT 404 error gif" />
      </div>
    </div>
  );
}

export default NoMatch;
