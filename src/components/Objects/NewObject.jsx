/* eslint-disable no-unused-vars */
import React from "react";
import Card from "../card/Card";

const NewObject = () => {
  return (
    <div className="bg-[#F8FAFA] p-5 rounded-2xl flex flex-col">
      <div className="text-[24px] font-semibold text-[#1F3448]">
        Neue Objekte
      </div>
      <div className="w-full grid grid-cols-3 gap-8">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default NewObject;
