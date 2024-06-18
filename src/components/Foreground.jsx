import React, { useRef, useState } from "react";
import Card from "./Card";
import AddDoc from "./AddDoc";

const Foreground = () => {
  const ref = useRef(null);
  // const data = [
  //   icon, desc, filesize, closeordownloadbtn, tagdetails
  // ];
  const [data, setData] = useState([
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
  ]);
  const handleCreateDoc = (newDoc) => {
    setData((prevData) => [...prevData, newDoc]);
  };
  return (
    <>
      <div
        ref={ref}
        className="fixed z-[3] top-0 left-0 w-full h-full flex gap-8 flex-wrap p-5"
      >
        {data.map((item, index) => (
          <Card key={index} data={item} reference={ref} />
        ))}
      </div>
      <AddDoc onCreateDoc={handleCreateDoc} />
    </>
  );
};

export default Foreground;
