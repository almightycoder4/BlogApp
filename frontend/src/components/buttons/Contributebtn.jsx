import { style, textAlign, width } from "@mui/system";
import React from "react";
import CreateIcon from "@mui/icons-material/Create";
export default function Contributebtn() {
  return (
    <div>
      <div
        style={{
          backgroundColor: "red",
          color: "white",
          cursor: "pointer",
          width: "auto",
          height: "40px",
          textAlign: "center",
          borderRadius: "10px",
          boxShadow: "0 0 10px black",
        }}
      >
        <h2 style={{ display: "flex", alignItems: "flex-end" }}>
          Contribute a blog....
          <CreateIcon />
        </h2>
      </div>
    </div>
  );
}
