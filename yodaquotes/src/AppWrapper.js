import React from "react";

function AppWrapper({ children }) {
  return (
    <div
      style={{
        backgroundColor: "black",
        width: "100%",
        height: "100vh",
        color: "white",
        padding: "0",
        margin: "0",
        overflow: "none",
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

export default AppWrapper;
