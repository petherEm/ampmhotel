import React from "react";
import Image from "next/image";
import Link from "next/link";

import { BsArrowsFullscreen, BsPeople } from "react-icons/bs";

const Room = ({ room }) => {
  // destructure room
  const { id, name, image, size, maxPerson, description, price } = room;

  return (
    <div className="bg-white shadow-2xl min-h-[500px] group">
      <div className="overflow-hidden">
        <Image
          className="group-hover:scale-110 transition-all duration-300"
          src={image}
          width={400}
          height={300}
        />
      </div>

      {/* details */}

      <div className="bg-white shadow-lg max-w-[300px] mx-auto h-[60px] -translate-y-1/2 flex justify-center items-center uppercase font-teritary tracking-[1px] font-semibold text-base">
        <div className="flex justify-between w-[80%]">
          {/* SIZE */}
          <div className="flex items-center gap-x-2 text-[12px]">
            <div className="text-accent">
              <BsArrowsFullscreen className="text-[15px]" />
            </div>
            <div className="flex gap-x-1">
              <div>Size</div>
              <div>{size}m2</div>
            </div>
          </div>

          {/* ROOM CAPACITY */}
          <div className="flex items-center gap-x-2 text-[12px]">
            <div className="text-accent">
              <BsPeople className="text-[18px]" />
            </div>
            <div className="flex gap-x-1">
              <div>Max People</div>
              <div>{maxPerson}</div>
            </div>
          </div>
        </div>
      </div>

      {/* name */}
      <div className="text-center">
        <Link href="#">
          <h3 className="">{name}</h3>
        </Link>
        <p className="max-w-[300px] mx-auto mb-3 lg:mb-6">
          {description.slice(0, 56)}
        </p>
      </div>

      <Link href="#" className="btn btn-secondary btn-sm max-w-[240px] mx-auto text-[14px]">
        Book now from ${price}
      </Link>
    </div>
  );
};

export default Room;
