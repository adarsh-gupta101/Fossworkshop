import React from "react";

function Banner() {
  return (
    <div>
      <img className="m-auto rounded-xl  " style={{objectFit:"cover",height:"65vh",width:"75vw"}} alt=""
      src='https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' />
    </div>
  );
}

export default Banner;
