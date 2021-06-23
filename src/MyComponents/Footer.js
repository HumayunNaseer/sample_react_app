import React from "react";

export const Footer = () => {
  let footerStyle = {
    margin: "40px",
    // top: "100vh",
    width: "100%",
    minHeight: "10vh"
  };
  return (
    <footer className="bg-dark text-light" style={footerStyle}>
      <p className="text-center">Copyright &copy; MyTodosList.com</p>
    </footer>
  );
};
