import "../styles/NoMatch/styles.css";

function NoMatch() {
  return (
    <div
      style={{
        height: 560,
        clear: "both",
        paddingTop: 120,
        textAlign: "center",
      }}
    >
      <div id="errorBg">
        <h1>404 Page Not Found</h1>
        <h1>
          <span role="img" aria-label="Face With Rolling Eyes Emoji">
            🙄
          </span>
        </h1>
      </div>
    </div>
  );
}

export default NoMatch;
