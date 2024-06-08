import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();

  return (
    <>
      <h1>I am dynamic route</h1>
      <h1>My dynamic ID id {id}</h1>
    </>
  );
};

export default Product;
