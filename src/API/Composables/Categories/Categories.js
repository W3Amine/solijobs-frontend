import React, { useState } from "react";

import AxiosClient from "../../AxiosClient";

export default function Categories() {
  const [AllCategories, setAllCategories] = useState();
  const GetAllCategories = () => {
    AxiosClient.get("/categories").then(({ data }) => {
      setAllCategories(data.data);
    });
  };

  //    ####### retrun ########
  return { GetAllCategories, AllCategories };
}
