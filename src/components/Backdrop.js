import React from "react";
import { toast } from "react-toastify";

const Backdrop = (prop) => {
  const { displayModal } = prop;
  return (
    <div
      className="Backdrop"
      style={{
        display: displayModal ? null : "none",
      }}
      onClick={() => toast.dismiss("completed-item-all")}
    />
  );
};
export default Backdrop;
