import React from "react";

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <section className="max-w-6xl mx-auto my-16">{children}</section>;
};

export default Wrapper;
