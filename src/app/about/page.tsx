// "use client";
import { Metadata } from "next";
import React from "react";

// Static Metadata in about page.
export const metadata: Metadata = {
  title: {
    absolute: "About",
  },
};

const About = () => {
  const getRandomNumber = (): number => {
    const number = Math.floor(Math.random() * 5) + 1;
    if (number === 2) {
      throw new Error("Error in About Component.");
    }
    return number;
  };

  getRandomNumber();
  return (
    <div>
      <h1 className="w-full text-lg font-semibold text-gray-900 text-center my-2">
        About Page
      </h1>
    </div>
  );
};

export default About;
