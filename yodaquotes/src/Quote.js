import React from "react";

function Quote({ children }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center"
      }}
    >
      {children}
    </div>
  );
}

export default Quote;
