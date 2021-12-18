import React from "react";

function Header() {
  return <div className="flex justify-between items-center p-4">

<div>
      <p className="text-2xl font-bold text-white">EduCare</p>
      </div>

<div className="flex items-center text-white">
      <p className="px-2 text-xl">Login</p>
      <p className="bg-black text-white p-2 rounded-2xl">SignUp</p>
      </div>
  </div>;
}

export default Header;
