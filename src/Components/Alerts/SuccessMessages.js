import React from "react";

export default function SuccessMessages({ message }) {
  return (
    <div>
      {message && (
        <div className="alert alert-success col-md-11 mx-auto" role="alert">
          <p className="my-0">{message}</p>
        </div>
      )}
    </div>
  );
}
