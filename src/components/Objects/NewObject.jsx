/* eslint-disable no-unused-vars */
import React from "react";
import Card from "../card/Card";

const NewObject = () => {
  return (
    <div className="container border-double  bg-[rgb(249,250,251)] pb-[20px] px-[20px] rounded-2xl border-[1px]">
      <div className="title text-[25px] font-bold mt-[10px]">
        Neue Objekte
      </div>
      <div className="card flex flex-row justify-between">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default NewObject;
