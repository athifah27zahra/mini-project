import React, { useState } from "react";
import Card from "./Card";
import EmptyCard from "./EmptyCard";
import PlusCircle from "../assets/plus-circle.svg";
import Button from "../components/ButtonBase";
// import Modal from "../components/Modal";

const CardGroup = ({ kanbanColor }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState({
    taskName: "",
    progress: "",
  });

  const handleInput = (e, field) => {
    setInput({ ...input, [field]: e.target.value });
  };

//   const modalConfig = {
//     title: "Create Task",
//     content: (
//       <>
//         <div>
//           <p className="w-full block text-neutral-90 mb-2">Name</p>
//           <input
//             type="text"
//             placeholder="Type your task"
//             className="w-full py-2 px-4 rounded-lg bg-white border-2 border-neutral-40 focus:outline-none focus:border-primary focus:caret-primary"
//             onChange={(e) => handleInput(e, "taskName")}
//             value={input.taskName}
//           />
//         </div>
//         <div className="mt-5">
//           <p className="w-full block text-neutral-90 mb-2">Progress</p>
//           <input
//             type="text"
//             placeholder="70%"
//             className="w-full py-2 px-4 rounded-lg bg-white border-2 border-neutral-40 focus:outline-none focus:border-primary focus:caret-primary md:w-[50%]"
//             onChange={(e) => handleInput(e, "progress")}
//             value={input.progress}
//           />
//         </div>
//       </>
//     ),
//     actionButton: (
//       <Button
//         variant="primary"
//         type="button"
//         onClick={() => {
//           setIsOpen(false);
//         }}
//       >
//         Submit
//       </Button>
//     ),
//   };

  return (
    <div className={`h-fit p-4 border rounded-md w-[320px] ${kanbanColor[0]} ${kanbanColor[1]}`}>
      <div>
        <h1 className={`border rounded-md py-1 px-3 w-fit text-sm ${kanbanColor[2]} ${kanbanColor[3]}`}>
          Group Task
        </h1>
        <p className="text-neutral-90 mt-2 font-semibold text-sm">Month</p>
      </div>
      <Card progress={100} />
      <Card progress={50} />
      <EmptyCard />
      <Button
        variant="text"
        startIcon={PlusCircle}
        className="font-normal text-sm pl-0 mt-2"
        onClick={() => setIsOpen(true)}
      >
        New Task
      </Button>
      {/* <Modal isOpen={isOpen} setIsOpen={setIsOpen} modalConfig={modalConfig} /> */}
    </div>
  );
};

export default CardGroup;