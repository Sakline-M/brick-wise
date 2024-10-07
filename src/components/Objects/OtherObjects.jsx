/* eslint-disable no-unused-vars */
import React from "react";
import Card from "../card/Card";

const OtherObjects = () => {
  return (
    <div className="w-full h-full flex flex-col px-8 gap-y-5">
      <span className="text-2xl font-medium text-zinc-600">Weitere Objekte</span>
      <div className="w-full h-full grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default OtherObjects;
