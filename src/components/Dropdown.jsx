import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ReactComponent as ActiveMoveLeft } from "../assets/hover-arrow-left.svg"
import { ReactComponent as InactiveMoveLeft } from "../assets/arrow-left.svg"
import { ReactComponent as ActiveMoveRight } from "../assets/hover-arrow-right.svg"
import { ReactComponent as InactiveMoveRight } from "../assets/arrow-right.svg"
import { ReactComponent as ActiveEdit } from "../assets/hover-edit.svg"
import { ReactComponent as InactiveEdit } from "../assets/edit.svg"
import { ReactComponent as ActiveDelete } from "../assets/hover-trash.svg"
import { ReactComponent as InactiveDelete } from "../assets/trash.svg"
import { ReactComponent as More } from "../assets/meatballs-menu.svg"

export default function Dropdown() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="h-fit py-1 px-4 rounded-lg hover:bg-neutral-30 text-neutral-100 z-0">
          <More />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="z-10 absolute right-0 mt-1 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? " text-primary" : "text-[#333333]"
                  } group flex w-full items-center px-2 py-2 text-sm leading-6 font-nunito font-semibold`}
                >
                  {active ? (
                    <ActiveMoveRight className="mr-5 w-6 h-6" />
                  ) : (
                    <InactiveMoveRight className="mr-5 w-6 h-6" />
                  )}
                  Move Right
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? " text-primary" : "text-[#333333]"
                  }  group flex w-full items-center px-2 py-2 text-sm leading-6 font-nunito font-semibold`}
                >
                  {active ? (
                    <ActiveMoveLeft className="mr-5 h-6 w-6" />
                  ) : (
                    <InactiveMoveLeft className="mr-5 w-6 h-6" />
                  )}
                  Move Left
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? " text-primary" : "text-[#333333]"
                  }  group flex w-full items-center px-2 py-2 text-sm leading-6 font-nunito font-semibold`}
                >
                  {active ? (
                    <ActiveEdit className="mr-6 h-5 w-5" />
                  ) : (
                    <InactiveEdit className="mr-6 w-5 h-5" />
                  )}
                  Edit
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? " text-danger" : "text-[#333333]"
                  }  group flex w-full items-center px-2 py-2 text-sm leading-6 font-nunito font-semibold`}
                >
                  {active ? (
                    <ActiveDelete className="mr-6 h-5 w-5" />
                  ) : (
                    <InactiveDelete className="mr-6 w-5 h-5" />
                  )}
                  Delete
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}