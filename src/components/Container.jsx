import React from "react";

function Container({ className, children }) {
  return (
    <div
      className={`w-full max-w-screen-[1440px] flex justify-center px-4 ${className}`}
    >
      {children}
    </div>
  );
}

export default Container;