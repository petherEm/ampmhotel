import React from "react";

import Room from "./Room.jsx";

import { roomData as rooms } from "../data.js";

const Rooms = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto lg:px-0">
        {/* grid */}
        <div className="grid grid-cols-1 max-w-sm mx-auto gap-[30px] lg:grid-cols-3 lg:max-w-none lg:mx-0">
          {rooms.map((room) => {
            return <Room room={room} key={room.id} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
