import React from "react";

const Username = (props) => {
  return (
    <div className="username-post mx-3 d-flex">
      <p className="username-show mt-3">@{props.username}</p>
    </div>
  );
};

export default Username;
