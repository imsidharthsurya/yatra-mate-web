import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10 lg:mx-56 mx-10 mt-10">
      <p className="md:text-5xl text-4xl font-extrabold">
        <span className="text-blue-700">
          Discover Your Next Adventure with AI:
        </span>{" "}
        Personalized Itineraries at Your Fingertips
      </p>
      <p className="text-xl text-gray-500">
        Your personal trip planner and travel curator, creating custom
        itineraries tailored to your interests and budget.
      </p>
      <Link to="/create-trip">
        <Button>Get Started, It's Free</Button>
      </Link>
    </div>
  );
};

export default Hero;
