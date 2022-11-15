import React from "react";
import ReactPaginate from "react-paginate";
import { useLocation } from "react-router-dom";
import "./index.css";
import qs from "query-string";

const Pagination = ({ pageCount, handlePageClick }) => {
  const { search } = useLocation();
  const queryParams = qs.parse(search);
  return (
    <ReactPaginate
      forcePage={queryParams.page - 1}
      pageCount={pageCount}
      onPageChange={handlePageClick}
      renderOnZeroPageCount={null}
      pageRangeDisplayed={6}
      marginPagesDisplayed={2}
      breakClassName={"page-item"}
      breakLinkClassName={"page-link"}
      containerClassName={"pagination"}
      pageClassName={"page-item"}
      pageLinkClassName={"page-link"}
      previousClassName={"page-item"}
      previousLinkClassName={"page-link"}
      nextClassName={"page-item"}
      nextLinkClassName={"page-link"}
      activeClassName={"active"}
    />
  );
};

export default Pagination;
