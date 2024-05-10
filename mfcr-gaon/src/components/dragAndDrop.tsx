import React, { useState } from "react";

function DragAndDrop() {
  const [listOne, setListOne] = useState(["vaporwave", "synthwave", "lo-fi"]);
  const [listTwo, setListTwo] = useState(["Electro", "dubstep", "house"]);

  const handleDragStart = (
    event: React.DragEvent<HTMLDivElement>,
    item: string
  ) => {
    event.dataTransfer.setData("text/plain", item);
  };

  const handleDrop = (
    event: React.DragEvent<HTMLDivElement>,
    setList: {
      (value: React.SetStateAction<string[]>): void;
      (value: React.SetStateAction<string[]>): void;
      (arg0: any[]): void;
    },
    list: string[]
  ) => {
    const item = event.dataTransfer.getData("text");
    setList([...list, item]);
    // Remove item from the other list
    if (list === listOne) {
      setListTwo(listTwo.filter((i) => i !== item));
    } else {
      setListOne(listOne.filter((i) => i !== item));
    }
    event.preventDefault();
  };

  const handleDragOver = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };

  return (
    <div className="flex p-10">
      <div
        className="w-48 h-64 mx-10  bg-green-300 p-2"
        onDrop={(e) => handleDrop(e, setListOne, listOne)}
        onDragOver={handleDragOver}
      >
        {listOne.map((item, index) => (
          <div
            key={index}
            draggable
            onDragStart={(e) => handleDragStart(e, item)}
            className="bg-yellow-300 text-white p-2 m-1 rounded cursor-pointer text-yellow-900"
          >
            {item}
          </div>
        ))}
      </div>
      <div className="w-48 h-64 mx-10 text-center  p-2">
        <p>
          ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★
          ★ ★ ★ ★ ★
        </p>
      </div>
      <div
        className="w-48 h-64 bg-violet-500 p-2"
        onDrop={(e) => handleDrop(e, setListTwo, listTwo)}
        onDragOver={handleDragOver}
      >
        {listTwo.map((item, index) => (
          <div
            key={index}
            draggable
            onDragStart={(e) => handleDragStart(e, item)}
            className="bg-sky-300 text-violet-500 p-2 m-1 rounded cursor-pointer"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DragAndDrop;
