import React from "react";

function Header() {
  return <div className="flex justify-between items-center p-4">

<div>
      <p className="text-xl font-bold">EduCare</p>
      </div>

<div className="flex items-center">
      <p className="px-2 text-xl">Login</p>
      <p className="bg-black text-white p-2 rounded-2xl">SignUp</p>
      </div>
  </div>;
}

export default Header;
