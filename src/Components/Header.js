import React from "react";
import Navigation from "./Navigation";

export default function Header(props) {
  return (
    <>
      <Navigation
        currentPage={props.currentPage}
        handlePageChange={props.handlePageChange}
      />

      <div className='nav-anchor'></div>
    </>
  );
}
