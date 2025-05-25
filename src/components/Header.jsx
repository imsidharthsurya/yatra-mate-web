import React from "react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <div className="flex justify-between md:p-5 p-3 shadow-sm">
      <img src="/yatra-mate-logo.png" className="w-50" />
      <Button>Sign In</Button>
    </div>
  );
};

export default Header;
