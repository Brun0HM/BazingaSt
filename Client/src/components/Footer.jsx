import React from "react";
import Logo from "../assets/Logo2.png";

const Footer = (props) => {
  return (
    <div className="">
      <div className="d-flex justify-content-between align-items-center bg-white p-3">
        <div className="d-none d-md-grid"></div>
        <img className="" width={150} src={Logo} alt="logo bazinga store" />
        <div className="d-flex flex-column justify-content-end align-items-end">
          <div className="d-flex justify-content-end align-items-center gap-1">
            <i className="bi bi-github"></i>
            <a
              className="text-decoration-none text-black fw-medium"
              href="https://github.com/Brun0HM"
              target="_blank"
              rel="noopener noreferrer"
            >
              Brun0HM
            </a>
          </div>
          <div className="d-flex justify-content-end align-items-center gap-1">
            <i className="bi bi-github"></i>
            <a
              className="text-decoration-none text-black fw-medium"
              href="https://github.com/rattin1"
              target="_blank"
              rel="noopener noreferrer"
            >
              rattin1
            </a>
          </div>
          <div className="d-flex justify-content-end align-items-center gap-1">
            <i className="bi bi-github"></i>
            <a
              className="text-decoration-none text-black fw-medium"
              href="https://github.com/ThiagoM22"
              target="_blank"
              rel="noopener noreferrer"
            >
              ThiagoM22
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
