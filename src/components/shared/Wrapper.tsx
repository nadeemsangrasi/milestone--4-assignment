import React from "react";

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <section className="max-w-screen-xl mx-auto my-16 py-2 px-2 sm:px-0">
      {children}
    </section>
  );
};

export default Wrapper;
