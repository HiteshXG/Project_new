import React, { useRef } from "react";
import Card from "./Card";




const Foreground = () => {
  const ref = useRef(null);
  // const data = [
  //   icon, desc, filesize, closeordownloadbtn, tagdetails
  // ];
  const data = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
  ];
  return (
    <div ref={ref} className="fixed z-[3] top-0 left-0 w-full h-full flex gap-8 flex-wrap p-5">
      {data.map((item, index)=>(
        <Card data={item} reference={ref}/>
      ))}
    </div>
  );
};

export default Foreground;
