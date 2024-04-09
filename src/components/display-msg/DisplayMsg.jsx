const DisplayMsg = (props) => {
  return (
    <div>
      {props.theme === "dark" ? (
        <p style={{ backgroundColor: "black", color: "white" }}>
          {props.message}
        </p>
      ) : (
        <p>{props.message}</p>
      )}
    </div>
  );
};

export default DisplayMsg;
