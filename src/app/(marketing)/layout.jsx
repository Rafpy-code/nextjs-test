import React from "react";

import "src/app/globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const MarketingLayout = ({ children }) => {
  return (
    <html lang="es">
      <body>
        <h1 className=" ml-5">MarketingLayout</h1>
        {children}
      </body>
    </html>
  );
};

export default MarketingLayout;
