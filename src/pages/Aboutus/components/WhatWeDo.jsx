import React from "react";

const WhatWeDo = () => {
  return (
    <div className="bg-ash w-full pb-6">
      <div className="grid grid-cols-2 container items-center">
        <div className="col-span-1 space-y-3">
          <h1 className="text-6xl font-playfair text-primary">
            What We Do
          </h1>
          <p>
            We offer curated holiday packages across the world which include
            flight, hotels, activities/experiences, visa. Our goal is to be the
            most customer centric holiday organization with an great bouquet
            enabled by a final balance of tech and human intervention.
          </p>
        </div>
        <div className="col-span-1 space-y-2">
          <div className="flex flex-row justify-center gap-8">
            <div className="flex flex-col gap-2">
              <h1 className="text-8xl font-playfair text-primary">250+</h1>
              <p className="text-sm text-primary border-b border-primary">packages across the world</p>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-8xl font-playfair text-primary">50+</h1>
              <p className="text-sm text-primary border-b border-primary">years of holiday experience</p>
            </div>
          </div>
          <div className="flex flex-row justify-center gap-8">
            <div className="flex flex-col gap-3">
              <h1 className="text-8xl font-playfair text-primary">1M+</h1>
              <p className="text-sm text-primary border-b border-primary">hotels across the world</p>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="text-8xl font-playfair text-primary">25k+</h1>
              <p className="text-sm text-primary border-b border-primary">experiences</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
