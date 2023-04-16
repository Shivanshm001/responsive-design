import React from "react";
import dataList from "./data";
const ShareWithModal = () => {
  return (
    <div className="w-[20%] h-[40%] bg-white rounded-xl ">
      <h1 className="font-bold text-sm py-2 text-center">Share With...</h1>
      <hr />
      <section className="flex flex-col px-4 gap-2 pt-2 h-[230px] overflow-scroll">
        {dataList.map((elem) => (
          <><div className="flex gap-2">
                <input type="radio" name="" id="" />
                <span className="text-xs font-bold">{elem.name}</span>
            </div><hr /></>
        ))}
      </section>
      <hr />
      <div className="flex justify-evenly py-2">
        <button className="bg-[#6780AF] text-[10px] font-bold text-white px-8 rounded-md">Share now</button>
        <button className="border-[1.5px] border-[#6780AF] font-bold text-[10px] text-[#6780AF] px-8 rounded-md">Cancel</button>
      </div>
    </div>
  );
};

export default ShareWithModal;
