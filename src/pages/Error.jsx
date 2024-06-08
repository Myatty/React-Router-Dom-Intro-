import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate("/");
  };
  return (
    <>
      <h1>Page Not Found</h1>
      <div className="btn">
        <button onClick={navigateHandler}>Go Back Home</button>
      </div>
    </>
  );
};

export default Error;
