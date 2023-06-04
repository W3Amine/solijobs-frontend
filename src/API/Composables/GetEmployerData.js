import { useState } from "react";
import AxiosClient from "../AxiosClient";

export default function GetEmployerData() {
  const [EmployerData, setData] = useState();

  const GetTheEmployerData = async () => {
   await AxiosClient.get("/EmployerProfile/GetEmployerData").then(({ data }) => {
     setData(data);
   });
  };

  return { GetTheEmployerData, EmployerData };
}
