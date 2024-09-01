import React from "react";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div>
      <div>Welcome</div>
      <Link to={"/"}>
        <button className="bg-liverRed rounded-md">back to website</button>
      </Link>
    </div>
  );
}
