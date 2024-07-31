import React from "react";
import "./MainCard.scss";
import CustomBreadcrumb from "../CustomBreadcrumb";

import { useNavigate } from "react-router-dom";
const MainCard = (props) => {
  const {
    title = "",
    pageRoutes = [],
    activeButtons,
    isBack = false,
    style,
  } = props;

  const navigate = useNavigate();

  const onBackClickHandler = () => {
    if (isBack) {
      navigate(-1);
    }
  };

  return (
    <div className="main-container">
      <div className="main-subcontainer">
        <div className="maincard-leftside">
          <span
            className={`maincard-title ${isBack ? "cursor-pointer" : ""}`}
            onClick={onBackClickHandler}
          >
            {isBack && <i className="bi bi-chevron-left" />}
            <strong style={style}>{title}</strong>
          </span>
          {pageRoutes?.length > 0 && (
            <CustomBreadcrumb pageRoutes={pageRoutes} />
          )}
        </div>
        <div className="maincard-rightside">{activeButtons}</div>
      </div>
      {props.children}
    </div>
  );
};

export default MainCard;
