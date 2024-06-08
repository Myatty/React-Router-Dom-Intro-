import { useNavigate } from "react-router-dom";

const Home = () => {
  
  const navigate = useNavigate();

  const navigateHandler = () => {
    setTimeout(() => {
      navigate("/products");
    }, 3000);
  };

  return (
    <>
      <h1> Home Page pr </h1>
      <div className="btn">
        <button onClick={navigateHandler}>Go to products</button>
      </div>
    </>
  );
};

export default Home;
