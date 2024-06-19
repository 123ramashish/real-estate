import React, { Children } from "react";
import Header from "./_components/Header";

export default function Provider({ children }) {
  return (
    <div>
      <Header />

      {children}
    </div>
  );
}
