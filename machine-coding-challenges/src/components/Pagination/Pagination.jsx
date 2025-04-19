import { useEffect, useState } from "react";
import PaginationHome from "./PaginationHome";

const Pagination = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://dummyjson.com/products?limit=500&skip=10"
      );
      const json = await res.json();
      setProducts(json.products);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h2>Pagination</h2>
      <PaginationHome products={products} />
    </>
  );
};

export default Pagination;
