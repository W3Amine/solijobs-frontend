import React from "react";

export default function ErrorMesages({errors}) {
  return (
    <>
      {errors && (
        <div className="alert alert-danger col-md-11 mx-auto" role="alert">
          {errors.map((error) => (
            <p className="my-0" key={error}>
              {error}
            </p>
          ))}
        </div>
      )}
    </>
  );
}
