import { CircularProgress } from "@mui/material";
import React from "react";

const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center h-96">
      <CircularProgress />
    </div>
  );
};

export default Loader;
