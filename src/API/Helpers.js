import React from "react";

export default function Helpers() {
  return <div>Helpers</div>;
}

export function LaravelErrorsHandler(Errors) {
  let TheErrors = [];
  for (const key in Errors) {
    for (const errorKey in Errors[key]) {
      TheErrors.push(Errors[key][errorKey]);
    }
  }
  return TheErrors;
}
