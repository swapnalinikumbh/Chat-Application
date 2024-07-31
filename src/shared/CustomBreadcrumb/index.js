import React from "react";
import "./CustomBreadcrumb.scss";
import { useNavigate } from "react-router-dom";

const CustomBreadcrumb = ({ pageRoutes = [] }) => {
  const navigate = useNavigate();

  const onClickNavigate = (nav) => {
    navigate(nav?.path);
  };
  return (
    <nav aria-label="breadcrumb" className="breadcrumb-container">
      <ol className="breadcrumb">
        {pageRoutes?.length &&
          pageRoutes?.map((page, index) => {
            return (
              <li
                onClick={() => onClickNavigate(page)}
                className={`breadcrumb-item ${
                  index === pageRoutes?.length - 1 ? "active" : ""
                }`}
                aria-current={index === pageRoutes?.length - 1 && "page"}
                key={page?.path}
              >
                {page?.label || ""}
              </li>
            );
          })}
      </ol>
    </nav>
  );
};

export default CustomBreadcrumb;
