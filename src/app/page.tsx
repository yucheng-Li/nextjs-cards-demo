"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  // Function to handle click events
  const handleClick = (id) => {
    // alert(`Clicked on box ${id}`);
    console.log(id - 1);
  };

  // Colors array for different boxes
  const colors = [
    "#FF6347",
    "#FFD700",
    "#ADFF2F",
    "#87CEEB",
    "#FF69B4", // top row colors
    "#8A2BE2",
    "#00FF7F",
    "#FFDAB9",
    "#FF4500",
    "#7FFF00",
    "#D2691E", // middle 3x3 grid colors
    "#1E90FF",
    "#FF1493",
    "#32CD32",
    "#FF8C00",
    "#9932CC", // bottom row colors
    "#9932CC",
    "#9932CC",
    "#9932CC",
  ];

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-10">
      {/* Top row */}
      <div className="grid grid-cols-5 gap-4 mb-4">
        {colors.slice(0, 5).map((color, index) => (
          <div
            key={index}
            className="h-16 w-16"
            style={{ backgroundColor: color }}
            onClick={() => handleClick(index + 1)}
          >
            {index}
          </div>
        ))}
      </div>

      {/* Middle 3x3 grid */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        {colors.slice(5, 14).map((color, index) => (
          <div
            key={index + 5}
            className="h-16 w-16"
            style={{ backgroundColor: color }}
            onClick={() => handleClick(index + 6)}
          >
            {index + 5}
          </div>
        ))}
      </div>

      {/* Bottom row */}
      <div className="grid grid-cols-5 gap-4">
        {colors.slice(14, 19).map((color, index) => (
          <div
            key={index + 14}
            className="h-16 w-16 border border-white"
            style={{ backgroundColor: color }}
            onClick={() => handleClick(index + 15)}
          >
            {index + 14}
          </div>
        ))}
      </div>
    </main>
  );
}
