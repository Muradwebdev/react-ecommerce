import { useRouteError } from "react-router";

const Error = () => {
  const error = useRouteError();
  return (
    <div style={{ padding: "20px", color: "red" }}>
      <h1>Xəta baş verdi! 😬</h1>
      <p>{error.statusText || error.message}</p>
      <button onClick={() => window.location.reload()}>Yenidən yoxla</button>
    </div>
  );
};

export default Error;
