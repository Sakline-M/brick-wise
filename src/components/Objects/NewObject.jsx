/* eslint-disable no-unused-vars */
import React from "react";
import Card from "../card/Card";

const NewObject = () => {
  return (
    <div className="bg-[#F8FAFA] p-5 rounded-2xl flex flex-col gap-y-5 h-auto w-full">
      <div className="text-[24px] font-semibold text-[#1F3448]">
        Neue Objekte
      </div>
      <div className="w-full h-full grid gap-8 xl:grid-cols-3 md:grid-cols-2 grid-cols-1">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default NewObject;
