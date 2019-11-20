import React from "react";

function Quote({ children }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        margin: "24px",
        height: "200px"
      }}
    >
      {children}
    </div>
  );
}

export default Quote;
