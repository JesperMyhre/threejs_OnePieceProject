import { useEffect, useState } from "react";
import { arcs, sagas } from "../constants";

const Saga = () => {
  /*   const [sagaData, setSagaData] = useState([]);
  useEffect(() => {
    fetch("https://api.api-onepiece.com/v2/sagas/en")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setSagaData(data);
      });
  }, []); */
  return (
    <section className="w-full max-h flex flex-col justify-center items-center gap-4">
      {arcs.map((item) => (
        <div
          key={item.id}
          className="w-4/5 flex flex-row justify-between items-center border-solid gap-5 border-2 border-blue-500 rounded-lg"
        >
          <div className="text-left text-white place-self-end relative">
            <div
              className="relative w-[300px] h-[300px] bg-cover bg-center rounded-lg"
              style={{ backgroundImage: `url(${item.img})` }}
            >
              {/*               <img
                className="h-[300px] w-auto object-cover"
                src={item.img}
                alt={`${item.arc} poster`}
              /> */}
            </div>
            <div className="absolute bottom-0 left-0 w-full bg-black-300 opacity-50 rounded-lg p-3">
              <p>{item.saga}</p>
              <h2 className="text-2xl font-semibold">{item.arc}</h2>
            </div>
          </div>

          <div className="w-1/2">
            <p className="text-white-600 p-5 hover:brightness-125">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Saga;
