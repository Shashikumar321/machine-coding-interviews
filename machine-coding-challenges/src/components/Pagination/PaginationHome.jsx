import { useState } from "react";
import ProductCard from "./ProductCard";

const PaginationHome = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);

  const totalProducts = products.length;
  const noOfPages = Math.ceil(totalProducts / pageSize) - 1;
  const start = currentPage * pageSize;
  const end = start + parseInt(pageSize);

  const handlePageSizeChange = (event) => {
    setPageSize(event.target.value);
    setCurrentPage(0);
  };

  const goToPrevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const goToNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const goToFirstPage = () => {
    setCurrentPage(0);
  };

  const goToLastPage = () => {
    setCurrentPage(noOfPages);
  };

  return (
    <>
      <div>
        <div className="pagination-container">
          <div className="pagination-product-container">
            {products.slice(start, end).map((prod) => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </div>
          <div className="pagination-footer">
            <div className="pagination-results-dropdown">
              <select
                className="pagination-select-dropdown"
                id="dropdown"
                value={pageSize}
                onChange={handlePageSizeChange}
              >
                <option value="" disabled>
                  Select an option
                </option>
                <option value="10">10</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
              <p className="pagination-results-text">results per page</p>
            </div>
            <div className="pagination-next-prev">
              <button disabled={currentPage < 1} onClick={goToFirstPage}>
                ◀◀︎
              </button>
              <button disabled={currentPage < 1} onClick={goToPrevPage}>
                ◀︎
              </button>
              <span>
                {" page " + (currentPage + 1) + " of " + (noOfPages + 1)}{" "}
              </span>
              <button
                disabled={currentPage > noOfPages - 1}
                onClick={goToNextPage}
              >
                ▶︎
              </button>
              <button
                disabled={currentPage > noOfPages - 1}
                onClick={goToLastPage}
              >
                ▶︎▶︎
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaginationHome;
