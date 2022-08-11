import React from "react";

const IconDescription = ({ children }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      width: "200px",
      margin: " auto",
      padding: "15px",
      textAlign: "center"
    }}
  >
    {children}
  </div>
);

export default IconDescription;
