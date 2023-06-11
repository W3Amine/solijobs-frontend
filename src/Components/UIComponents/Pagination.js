import React from "react";
import parse from "html-react-parser";

export default function Pagination({ changePage, PaginationData }) {
  function handleClick(ele) {
    if (ele.currentTarget.value) {
      changePage( ele.currentTarget.value);
    }
  }

  return (
    <div className="pagination-outer d-flex">
      <div className="pagination-style1 mx-auto">
        <ul className="clearfix">
          {PaginationData.map((item) => (
            <li className={item.active && "active"} value={item.url && item.url.substring(item.url.indexOf("?page=") + 6)} onClick={handleClick}>
              <a>{parse(item.label)}</a>
            </li>
          ))}

          {/* <li className="prev">
            <a href="#">
              <span>
                {" "}
                <i className="fa fa-angle-left" />{" "}
              </span>
            </a>
          </li>
          <li>
            <a href="#">1</a>
          </li>
          <li className="active" value="2" onClick={handleClick}>
            <a>2</a>
          </li>
          <li>
            <a href="#">3</a>
          </li>
          <li>
            <a className="#" href="#">
              <i className="fa fa-ellipsis-h" />
            </a>
          </li>
          <li>
            <a href="#">5</a>
          </li>
          <li className="next">
            <a href="#">
              <span>
                {" "}
                <i className="fa fa-angle-right" />{" "}
              </span>
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  );
}
