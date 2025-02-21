import React from "react";

function DefaultLayout({ children }) {

  return (
    <div>
      <main className="pt-20 px-6">{children}</main>
    </div>
  );
}

export default DefaultLayout;