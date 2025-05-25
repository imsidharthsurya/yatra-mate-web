import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between md:p-5 p-3 shadow-sm">
      <Link to="">
        <img src="/yatra-mate-logo.png" className="w-50" />
      </Link>
      <Button>Sign In</Button>
    </div>
  );
};

export default Header;
