import React from "react";

export default function Pagination() {
  return (
    <div className="pagination-outer d-flex">
      <div className="pagination-style1 mx-auto">
        <ul className="clearfix">
          <li className="prev">
            <a href="javascript:;">
              <span>
                {" "}
                <i className="fa fa-angle-left" />{" "}
              </span>
            </a>
          </li>
          <li>
            <a href="javascript:;">1</a>
          </li>
          <li className="active">
            <a href="javascript:;">2</a>
          </li>
          <li>
            <a href="javascript:;">3</a>
          </li>
          <li>
            <a className="javascript:;" href="javascript:;">
              <i className="fa fa-ellipsis-h" />
            </a>
          </li>
          <li>
            <a href="javascript:;">5</a>
          </li>
          <li className="next">
            <a href="javascript:;">
              <span>
                {" "}
                <i className="fa fa-angle-right" />{" "}
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
