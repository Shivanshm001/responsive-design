import React, { useState } from "react";
import { dataList } from './../../Home/Umeet/data';

const SettingOptions = ({elem}) => {
    const {title,ChildComponent,otherProps} = elem;

    const [showDropDownList, setShowDropDownList] = useState(false);
    
  return (
    <div className="flex flex-col items-center w-full ">
      <div
        className="flex cursor-pointer w-full py-4 px-2"
        onClick={()=>setShowDropDownList(!showDropDownList)}
      >
        <h1 className="text-sm flex-1 ">
          {title}
        </h1>
        <img src="./images/groups.png" alt="" className="w-[20px] h-[20px]" />
      </div>
    {showDropDownList && <ChildComponent dataList={otherProps?.dataList}/>}
    </div>
  );
};

export default SettingOptions;
