import React, { useState } from "react";
import "./CustomTab.scss";

const CustomTab = (props) => {
  const {
    tabList = [],
    onClick = () => {},
    activeTab = { id: "done", label: "Done" },
    style,
  } = props;
  const [activeTabIndex, setActiveTabIndex] = useState(activeTab);

  const onClickHandler = (value) => {
    setActiveTabIndex(value);
    onClick(value);
  };

  return (
    <div className="container-fluid custom-tabs-main-container">
      <div className="container-fluid" style={{ position: "relative" }}>
        <div className="custom-tabs-header">
          <ul className="nav nav-tabs">
            {tabList?.map((value) => (
              <li
                key={value?.id}
                style={style}
                className={`custom-tab-label pb-2 ${
                  activeTabIndex?.id === value?.id ? "active" : ""
                }`}
                onClick={() => {
                  onClickHandler(value);
                }}
              >
                {value?.icon && <i className={`bi ${value?.icon}`} />}
                <div className="custom-tab-label-text">{value?.label}</div>
              </li>
            ))}
          </ul>
          {props?.children}
        </div>
      </div>
    </div>
  );
};

export default CustomTab;
