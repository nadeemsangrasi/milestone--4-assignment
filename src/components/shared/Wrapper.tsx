import React from "react";

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="max-w-6xl mx-auto my-16">{children}</div>;
};

export default Wrapper;
