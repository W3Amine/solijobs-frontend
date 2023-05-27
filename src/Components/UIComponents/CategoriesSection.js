import React from "react";
import CagetoryItem from "./CagetoryItem";
export default function CategoriesSection() {
  return (
    <>
      <div className="row">
        {/* START #  categories items Components */}
        <CagetoryItem />
        <CagetoryItem />
        <CagetoryItem />
        <CagetoryItem />
        <CagetoryItem />
        <CagetoryItem />
        <CagetoryItem />
        <CagetoryItem />
        {/* END #  categories items Components */}
      </div>
    </>
  );
}
