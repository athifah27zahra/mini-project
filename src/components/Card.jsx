import React, { useState } from 'react';
import Check from "../assets/check.svg";
import Plus from "../assets/plus-circle.svg";
import Button from "../components/Button"
import Dropdown from "../components/Dropdown"
import Modal from "../components/Modal"

const Task = ({ title, progress, isCompleted }) => (
  <div className="mt-4">
    <div className="flex flex-col gap-3">
      <div className="bg-neutral-20 p-4 border border-neutral-40 rounded-md w-full bg-gray-100">
        <div className="flex justify-between items-center mb-2">
          <span className="font-bold text-neutral-90">{title}</span>
        </div>

        <div className="border-t border-dashed border-gray-300 my-4"></div>

        <div className="flex items-center gap-2">
          <div className="flex items-center w-full bg-gray-200 rounded-full h-4">
            <div
              className={`h-4 rounded-full ${isCompleted ? 'bg-green-600' : 'bg-blue-600'}`}
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          {isCompleted && (
            <img
              src={Check}
              alt="check"
              width={22}
              className="ml-2"
            />
          )}

          {!isCompleted && (
            <span className="text-gray-500 text-xs">{progress}%</span>
          )}

          <div className="ml-2">
            <Dropdown />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const TaskGroup = ({ color, groupNumber, dateRange }) => {
  const [tasks] = useState([
    { title: "Re-designed the zero-g doggie bags. No more spills!", progress: 100, isCompleted: true },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const colorClasses = {
    blue: 'border-blue-100 bg-blue-50',
    yellow: 'border-yellow-200 bg-yellow-50',
    red: 'border-red-400 bg-red-50',
    green: 'border-green-400 bg-green-50',
  };

  return (
    <div className={`ml-[24px] h-fit p-4 border rounded-md w-[320px] ${colorClasses[color]}`}>
      <div>
        <h1 className={`border rounded-md py-1 px-3 w-fit text-sm ${colorClasses[color]}`}>
          Group Task {groupNumber}
        </h1>
        <div className="text-neutral-90 mt-2 font-semibold text-sm">
          {dateRange}
        </div>
        {tasks.map((task, index) => (
          <Task key={index} {...task} />
        ))}
  
        <Button
          variant="text"
          startIcon={Plus}
          className="font-normal text-sm pl-0 mt-2 text-black"
          onClick={openModal}
        >
          New Task
        </Button>

        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <div className="p-6 bg-white rounded-lg">
            <div className="text-lg font-bold mb-4">
              Create Task
            </div>

            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-4">
                Name
              </label>
              <input
                id="name"
                placeholder="Type your task"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                id="description"
                placeholder="Description"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                rows="4"
              ></textarea>
            </div>

            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={closeModal}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-sm font-medium text-white bg-teal-600 rounded-md hover:bg-teal-700"
              >
                Submit
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

const CardGroup = () => {
  const groups = [
    { color: 'blue', groupNumber: 1, dateRange: 'January - March' },
    { color: 'yellow', groupNumber: 2, dateRange: 'April - June' },
    { color: 'red', groupNumber: 3, dateRange: 'July - September' },
    { color: 'green', groupNumber: 4, dateRange: 'October - December' },
  ];

  return (
    <div className='flex'>
      <div className="container mt-[68px] max-sm:mt-[92px] py-[24px]">
        <div className="grid gap-4 grid-flow-col pb-24">
          {groups.map((group, index) => (
            <TaskGroup key={index} {...group} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardGroup;