import React from "react";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div className="dark:bg-gray-900 h-screen">
      <div className="dark:text-white">Welcome</div>
      <Link to={"/"}>
        <button className="bg-liverRed rounded-md text-white">back to website</button>
      </Link>
    </div>
  );
}
