import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <p className="text-5xl font-bold mb-10">Page Not Found!</p>
      <Link to="/">
        <Button>Go to Homepage</Button>
      </Link>
    </div>
  );
};

export default ErrorPage;
