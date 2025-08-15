"use client";

import React from "react";

const SplineEmbed: React.FC = () => {
  return (
    <div className="pointer-events-auto fixed left-0 top-0 -z-10 h-screen w-screen">
      <div className="size-full">
        <img
          src="/bg.svg"
          className="absolute w-full opacity-100 bottom-0"
          alt=""
        />
      </div>
    </div>
  );
};

export default SplineEmbed;
