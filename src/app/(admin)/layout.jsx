import React from "react";

import "src/app/globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const AdminLayout = ({ children }) => {
  return (
    <html lang="es">
      <body>
        <h1 className="ml-5">Admin Layout</h1>
        {children}
      </body>
    </html>
  );
};

export default AdminLayout;
