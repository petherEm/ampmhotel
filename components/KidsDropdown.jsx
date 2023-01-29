import React from "react";

import { Menu } from "@headlessui/react";

import { BsChevronDown } from "react-icons/bs";

const lis = [
  { id: 0, name: "0 Kids"},
  { id: 1, name: "1 Kid" },
  { id: 2, name: "2 Kids" },
  { id: 3, name: "3 Kids" },
  { id: 4, name: "4 Kids" },
];

const KidsDropdown = () => {
  return (
    <Menu as="div" className="w-full h-full bg-white relative">
      <Menu.Button className="w-full h-full flex items-center justify-between px-8">
        Kids
        <BsChevronDown className="text-base text-accent-hover" />
      </Menu.Button>

      <Menu.Items
        as="ul"
        className="bg-white absolute w-full flex flex-col z-40"
      >
        {lis.map((li, index) => {
          return (
            <Menu.Item
              as="li"
              key={index}
              className="border-b last-of-type:border-b-0 h-12 hover:bg-accent hover:text-white w-full flex justify-center items-center cursor-pointer"
            >
              {li.name}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default KidsDropdown;
