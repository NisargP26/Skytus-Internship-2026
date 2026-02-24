function ErrorMessage({ message }) {
  return (
    <h2 style={{ textAlign: "center", color: "red" }}>
      {message || "Something went wrong"}
    </h2>
  );
}

export default ErrorMessage;