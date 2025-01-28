import { useEffect, useState } from "react";
import { arcs } from "../constants";
import Menu from "../components/Menu";

const Saga = () => {
  return (
    <section className="w-full max-h flex flex-col justify-center items-center gap-4 bg-blue-600 py-2">
      <Menu />
      {arcs.map((item) => (
        <div
          key={item.id}
          className=" h-auto w-5/6 flex flex-row justify-between border-solid gap-5 border-2 border-blue-500 rounded-lg"
        >
          <div className="text-left text-white place-self-end relative">
            <img
              className="relative w-[600px] h-[600px] bg-cover bg-center rounded-lg"
              src={item.img}
              style={{
                backgroundImage: `linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0))`,
                WebkitMaskImage: `linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0))`,
                maskImage: `linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0))`,
              }}
            />
          </div>

          <div className="w-1/2">
            <h2 className="text-2xl font-semibold text-white">{item.arc}</h2>
            <p className="text-white">{item.saga}</p>
            <p className="text-white p-5">
              {item.desc}
            </p>
            <div className="flex flex-row gap-2 flex-wrap">
            {item.events && item.events.length > 0 ? (
              item.events.map((event) => (
                <div key={event.id} className="event-container" style={{ background: event.color }}>
                  <img src={event.img} alt="Event" className="w-auto h-8 rounded-lg"/>
                  {event.title}
                </div>
              ))
            ) : (
              <p className="text-white">No events available</p>
            )}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Saga;
