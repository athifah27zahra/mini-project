import {React, useState} from "react";
import Button from "../components/Button";
import Plus from "../assets/plus.svg";
import Modal from "../components/Modal";

//Layouts for Header
const Header = ({ isOpen, onClose, onSubmit }) => {  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);


  return (
    <div className="flex gap-[0.62rem] items-center px-5 py-4 border-b shadow-sm">
      <span className="text-lg font-bold">Product Roadmap</span>
      <Button startIcon={Plus} onClick={openModal}
        className="btn bg-cyan-600 text-white text-xs font-bold flex items-center gap-1 transition hover:bg-cyan-700"
      >
        <span>Add New Group</span>
      </Button>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="p-6 bg-white rounded-lg">
          <div className="text-lg font-bold mb-4">
            Add New Group
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
  );
}

export default Header;