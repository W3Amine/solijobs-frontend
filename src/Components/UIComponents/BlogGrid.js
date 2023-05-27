import React from "react";
import BlogItem from "./BlogItem";
export default function BlogGrid() {
  return (
    <>
      <div className="masonry-wrap row d-flex">
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </div>
    </>
  );
}
